from django.db import models
from rest_framework import serializers
from . import Hotel, RoomBook


stars = [
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
]

class Review(models.Model):
    text = models.TextField(blank=True, null=True)
    likes = models.CharField(max_length=1024, blank=True, null=True)
    dislikes = models.CharField(max_length=1024, blank=True, null=True)
    date = models.DateTimeField(auto_created=True, auto_now=True)

    position = models.PositiveIntegerField(choices=stars)
    staff = models.PositiveIntegerField(choices=stars)
    comfort = models.PositiveIntegerField(choices=stars)
    food = models.PositiveIntegerField(choices=stars)

    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    room_book = models.ForeignKey(RoomBook, on_delete=models.CASCADE)

    @property
    def score(self):
        return (self.position + self.staff + self.comfort + self.food) / 4

    @property
    def user(self):
        user = self.room_book.user
        return {
            "id": user.id,
            "username": user.username,
        }


class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.JSONField(read_only=True)
    score = serializers.FloatField(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'