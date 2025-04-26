from django.db import models
from django.db.models import JSONField, ForeignKey
from rest_framework import serializers
from . import Hotel


class Room(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    size = models.CharField(max_length=50, blank=True, null=True)
    max_people = models.PositiveIntegerField()

    features = models.JSONField(default=dict)
    images = JSONField(default=list)

    hotel = ForeignKey(Hotel, on_delete=models.CASCADE)


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'