from enum import unique

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, filters, decorators, response, exceptions

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

    @decorators.action(detail=False, methods=['delete'])
    def wipe(self, request, *args, **kwargs):
        objects = Hotel.objects.all()
        for object in objects:
            object.delete()

        return response.Response("Data was wiped", status=exceptions.status.HTTP_200_OK)

    @decorators.action(detail=False, methods=['get'])
    def price(self, request, *args, **kwargs):
        from ..models import Room

        max_price = request.query_params.get('max')
        min_price = request.query_params.get('min')

        rooms = Room.objects.all()
        rooms = rooms.filter(price__lte=max_price) if max_price else rooms
        rooms = rooms.filter(price__gte=min_price) if min_price else rooms

        hotels = [room.hotel for room in rooms]
        hotels = list(set(hotels))

        return response.Response(
            HotelSerializer(hotels, many=True).data,
            status=exceptions.status.HTTP_200_OK
        )