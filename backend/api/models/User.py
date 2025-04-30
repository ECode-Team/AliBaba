from django.db import models
from rest_framework import serializers
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.core.validators import EmailValidator
from django.core.exceptions import ValidationError

from .Trip import  TripSerializer


class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):

        if not email:
            raise ValueError('Email is required')
        validator = EmailValidator(message='Your email is not valid')
        try:
            validator(email)
        except ValidationError:
            raise ValueError('Your email is not valid')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, username, password, **extra_fields)


class User(AbstractUser):
    username = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
#     books = models.ManyToManyField('RoomBook', related_name='users', blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False) 



    objects = UserManager()

    USERNAME_FIELD = 'email'  
    REQUIRED_FIELDS = ['username']  
    
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password_confirm = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'phone', 'password', 'password_confirm']

    def validate(self, data):
        if data['password'] != data['password_confirm']:
            raise serializers.ValidationError('The password and confirmation must be the same..')
        return data

    def create(self, validated_data):
        validated_data.pop('password_confirm')
        user = User.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            password=validated_data['password'],
            phone=validated_data.get('phone', None)
        )
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)


class UserSerializer(serializers.ModelSerializer):
    tripbook_count = serializers.SerializerMethodField()
    trips = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'phone', 'tripbook_count','trips']

    def get_tripbook_count(self, obj):
        return obj.trip_bookings.count()
    
    def get_trips(self, obj):
       
        trip_books = obj.trip_bookings.all()
    
        trips = [trip_book.trip for trip_book in trip_books]

        unique_trips = list({trip.id: trip for trip in trips}.values())

        return TripSerializer(unique_trips, many=True).data
        
            

        