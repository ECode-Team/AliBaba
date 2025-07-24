from django.db import models
from django.db.models import JSONField
from rest_framework import serializers, exceptions, response
from .. import geo


HOTEL_TYPES = [
    ("Vila", "Vila"),
    ("Hotel", "Hotel")
]

class Hotel(models.Model):
    name = models.CharField(max_length=50)
    type = models.CharField(max_length=10, choices=HOTEL_TYPES)
    phone = models.CharField(max_length=15, blank=True, null=True)
    country = models.CharField(max_length=50, choices=[(item, item) for item in geo.geos.keys()])
    city = models.CharField(max_length=50, choices=[(item, item) for item in geo.geos_cities])
    street = models.CharField(max_length=50)
    # geolocation = models.CharField(max_length=50)

    arrive_time = models.TimeField(default="12")
    depart_time = models.TimeField(default="10")

    faq = models.JSONField(default=dict)
    features = models.JSONField(default=list)
    description = models.JSONField(default=dict)
    images = JSONField(default=list)
    # places = JSONField(default=list)
    rules = JSONField(default=dict)

    @property
    def rooms(self):
        from . import Room, RoomSerializer

        return RoomSerializer(Room.objects.filter(hotel=self.id), many=True).data

class HotelSerializer(serializers.ModelSerializer):
    room = serializers.JSONField(default=None, allow_null=True, write_only=True)
    rooms = serializers.ListField(read_only=True)

    class Meta:
        model = Hotel
        fields = '__all__'

    @classmethod
    def validate_city(cls, data):
        """
        Validate city in country
        """

        if data.get('depart') not in geo.geos.get(data.get('depart_country')) or \
                data.get('arrive') not in geo.geos.get(data.get('arrive_country')):
            raise exceptions.ParseError('City and Country error')

    @classmethod
    def create_room(cls, hotel, validated_data):
        """
        For Villa hotel create room immediately
        """

        from . import RoomSerializer

        room_serializer = RoomSerializer(data={"hotel": hotel.id, **validated_data})
        if room_serializer.is_valid():
            room_serializer.save()
        else:
            hotel.delete()
            raise exceptions.ParseError(room_serializer.errors)

    def create(self, validated_data):
        self.validate_city(validated_data)

        room_data = validated_data.pop('room')
        hotel = super().create(validated_data)

        if room_data:
            self.create_room(hotel, room_data)

        return hotel













