from django.db import models
from django.db.models import JSONField
from rest_framework import serializers, exceptions, response

HOTEL_TYPES = [
    ("Vila", "Vila"),
    ("Hotel", "Hotel")
]

class Hotel(models.Model):
    name = models.CharField(max_length=50)
    type = models.CharField(max_length=10, choices=HOTEL_TYPES)
    phone = models.CharField(max_length=15, blank=True, null=True)
    country = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    street = models.CharField(max_length=50)
    geolocation = models.CharField(max_length=50)

    faq = models.JSONField(default=dict)
    features = models.JSONField(default=dict)
    description = models.JSONField(default=dict)
    images = JSONField(default=list)
    places = JSONField(default=list)
    rules = JSONField(default=dict)


class HotelSerializer(serializers.ModelSerializer):
    room = serializers.JSONField(default=None, allow_null=True, write_only=True)
    rooms = serializers.JSONField(read_only=True)

    class Meta:
        model = Hotel
        fields = '__all__'

    def create(self, validated_data):
        room_data = validated_data.pop('room')

        hotel = super().create(validated_data)

        if room_data:
            from . import RoomSerializer
            RoomSerializer().create({ "hotel": hotel, **room_data })

        return hotel













