from django.db import models
from rest_framework import serializers


class BasicModel(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)


class BasicModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicModel
        fields = '__all__'