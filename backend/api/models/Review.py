from django.db import models
from rest_framework import serializers
from . import Hotel, RoomBook


class Review(models.Model):
    text = models.TextField(blank=True, null=True)
    likes = models.CharField(max_length=1024, blank=True, null=True)
    dislikes = models.CharField(max_length=1024, blank=True, null=True)
    date = models.DateTimeField(auto_created=True, auto_now=True)

    mark = models.DecimalField(max_digits=5, decimal_places=1)
    categories = models.JSONField()

    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    room_book = models.ForeignKey(RoomBook, on_delete=models.CASCADE)


class ReviewSerializer(serializers.ModelSerializer):
    mark = serializers.DecimalField(max_digits=5, decimal_places=1, read_only=True)

    class Meta:
        model = Review
        fields = '__all__'


    def create(self, validated_data):
        mark = sum(validated_data.get('categories').values()) / len(validated_data.get('categories'))

        room_book = Review.objects.create(
            **validated_data,
            mark = mark
        )

        return room_book