from django.db import models
from rest_framework import serializers
import datetime
from . import User, Room


class RoomBook(models.Model):
    begin = models.DateTimeField()
    end = models.DateTimeField()
    duration = models.FloatField()

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)


class RoomBookSerializer(serializers.ModelSerializer):
    duration = serializers.IntegerField(read_only=True)
    class Meta:
        model = RoomBook
        fields = '__all__'


    def create(self, validated_data):
        duration = validated_data.get('end') - validated_data.get('begin')

        room_book = RoomBook.objects.create(
            **validated_data,
            duration = duration.days
        )

        return room_book




