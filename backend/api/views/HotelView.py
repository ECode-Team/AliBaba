from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, filters

from ..models import Hotel, HotelSerializer

FILTER_FIELDS = [
    "name",
    "type",
    "country",
    "city",
    "street",
]

class HotelView(viewsets.ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = FILTER_FIELDS
    ordering_fields = FILTER_FIELDS

