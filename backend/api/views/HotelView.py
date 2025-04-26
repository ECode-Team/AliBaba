from rest_framework import viewsets

from ..models import Hotel, HotelSerializer


class HotelView(viewsets.ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer

