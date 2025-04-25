from django.db import models
from rest_framework import serializers

TRANSFER_TYPES = [
    ("Train", "Train"),
    ("Bus", "Bus"),
    ("Flight", "Flight")
]

PASSENGERS_TYPES = [
    ("Economy", "Economy"),
    ("Business", "Business"),
    ("First class", "First")
]

CITIES = [
    ("Tehran", "Tehran"),
    ("Shiraz", "Shiraz"),
    ("Mashhad", "Mashhad"),
    ("Gheshm", "Gheshm"),
    ("London", "London"),
    ("Dortmund", "Dortmund"),
    ("Gamburg", "Gamburg"),
]


class Trip(models.Model):
    transfer_type = models.CharField(choices=TRANSFER_TYPES, max_length=30)
    passengers_type = models.CharField(choices=PASSENGERS_TYPES, max_length=30)
    passengers_max = models.PositiveIntegerField(blank=True, null=True)

    depart = models.CharField(choices=CITIES, max_length=30)
    arrive = models.CharField(choices=CITIES,max_length=30)
    depart_time = models.DateTimeField()
    arrive_time = models.DateTimeField()

    price = models.DecimalField(max_digits=10, decimal_places=2)


class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = '__all__'
