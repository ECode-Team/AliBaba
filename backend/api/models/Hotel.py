from django.db import models
from django.db.models import JSONField
from rest_framework import serializers


class Hotel(models.Model):
    name = models.CharField(max_length=50)
    type = models.CharField(max_length=10) # vila | hotel
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
    class Meta:
        model = Hotel
        fields = '__all__'