from django.db import models
from rest_framework import serializers, exceptions

from . import Trip, User


class TripBook(models.Model):
    passengers = models.PositiveIntegerField()
    price = models.FloatField()

    trip = models.ForeignKey(Trip, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class TripBookSerializer(serializers.ModelSerializer):
    price = serializers.FloatField(read_only=True)

    class Meta:
        model = TripBook
        fields = '__all__'


    def check_trip(self, trip, passengers):
        trip_books: list[TripBook] = TripBook.objects.filter(trip=trip.id)

        trip_passengers = 0
        for trip_book in trip_books:
            trip_passengers += trip_book.passengers

        if trip_passengers + passengers > trip.passengers_max:
            return False

        return True


    def create(self, validated_data):
        trip: Trip = Trip.objects.get(id=validated_data.get('trip'))

        if not self.check_trip(
            trip=trip,
            passengers=validated_data.get('passengers')
        ):
            raise exceptions.NotAcceptable("The trip is full")

        return super().create({
            **validated_data,
            "price": validated_data.get('passengers') * trip.price
        })