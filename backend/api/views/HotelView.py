from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, filters, response, exceptions

from ..models import Hotel, HotelSerializer, Room, RoomSerializer

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


    def get_hotel_rooms(self, hotel_id):
        return RoomSerializer(Room.objects.filter(hotel=hotel_id), many=True).data


    def retrieve(self, request, *args, **kwargs):
        hotel_data = super().retrieve(request, *args, **kwargs).data
        rooms_data = self.get_hotel_rooms(hotel_data.get("id"))

        return response.Response(
            data={
                **hotel_data,
                "rooms": rooms_data
            }
        )