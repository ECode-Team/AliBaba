from django.db import models
from rest_framework import serializers

from . import Trip, User


class TripBook(models.Model):
    passengers = models.PositiveIntegerField()

    trip = models.ForeignKey(Trip, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name='trip_bookings')


class TripBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = TripBook
        fields = '__all__'