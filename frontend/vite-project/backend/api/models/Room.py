from django.db import models
from django.db.models import JSONField, ForeignKey
from rest_framework import serializers, exceptions
from . import Hotel, HotelSerializer


class Room(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    size = models.CharField(max_length=50, blank=True, null=True)
    max_people = models.PositiveIntegerField()

    features = models.JSONField(default=list)
    images = JSONField(default=list)

    hotel = ForeignKey(Hotel, on_delete=models.CASCADE)

    @property
    def books(self):
        from . import RoomBook

        books = RoomBook.objects.filter(room=self.id).order_by("begin")
        return [(book.begin, book.end) for book in books]


class RoomSerializer(serializers.ModelSerializer):
    books = serializers.ListField(read_only=True)

    class Meta:
        model = Room
        fields = '__all__'


    def create(self, validated_data):
        hotel = validated_data.get('hotel')
        hotel = Hotel.objects.get(id=hotel) if isinstance(hotel, int) else hotel

        if hotel.type == 'Hotel' or len(Room.objects.filter(hotel=hotel)) == 0:
            return super().create({
                **validated_data,
                'hotel': hotel
            })

        raise exceptions.ParseError("The Vila has already a room")






