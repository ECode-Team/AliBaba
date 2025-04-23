from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

from api.models.TripsModel import Trip
from api.models.Tripserializers import Tripserializer


class Tripsview(viewsets.ModelViewSet):
    queryset = Trip.objects.all()
    serializer_class = Tripserializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = [
        "TransferType",
        "From",
        "To",
        "passenger",
        "Price",  # Exact price
        "Date",  # Exact date
    ]
