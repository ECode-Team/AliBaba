from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend

from ..models import Trip, TripSerializer


class TripsView(viewsets.ModelViewSet):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'

