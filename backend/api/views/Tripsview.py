from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

from ..models import Trip, TripSerializer


class TripsView(viewsets.ModelViewSet):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = [
        "transfer_type",
        "passengers_type",
        "depart",
        "arrive",
        "depart_time",  # Exact date
        "arrive_time",
        "price",  # Exact price
    ]
