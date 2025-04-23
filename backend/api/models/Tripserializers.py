from .TripsModel import Trip

from rest_framework import serializers


class Tripserializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = "__all__"
