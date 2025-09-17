from django.db import models
from rest_framework import serializers


class User(models.Model):
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=50)

    @property
    def trip_books(self):
        from . import TripBook, TripBookSerializer

        books = TripBook.objects.filter(user=self.id)
        return TripBookSerializer(books, many=True).data

    @property
    def room_books(self):
        from . import RoomBook, RoomBookSerializer

        books = RoomBook.objects.filter(user=self.id)
        return RoomBookSerializer(books, many=True).data


class UserSerializer(serializers.ModelSerializer):
    trip_books = serializers.ListField(read_only=True)
    room_books = serializers.ListField(read_only=True)

    class Meta:
        model = User
        fields = '__all__'