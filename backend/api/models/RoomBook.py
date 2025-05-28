from django.db import models
from rest_framework import serializers, exceptions
from . import User, Room


class RoomBook(models.Model):
    begin = models.DateTimeField()
    end = models.DateTimeField()

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)

    @property
    def duration(self):
        return (self.end - self.begin).days


class RoomBookSerializer(serializers.ModelSerializer):
    duration = serializers.IntegerField(read_only=True)
    class Meta:
        model = RoomBook
        fields = '__all__'


    def check_room(self, room_id, begin, end):
        books : list[RoomBook] = RoomBook.objects.filter(room=room_id)

        for book in books:
            if book.begin <= begin < book.end or  book.begin < end <= book.end:
                return False

        return True

    def create(self, validated_data):
        if not self.check_room(
                room_id=validated_data.get('room'),
                begin=validated_data.get('begin'),
                end=validated_data.get('end')
        ):
            raise exceptions.NotAcceptable("Room is already booked")

        return super().create({**validated_data})