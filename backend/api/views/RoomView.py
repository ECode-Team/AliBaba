from rest_framework import viewsets, filters, decorators, response, exceptions
from django_filters.rest_framework import DjangoFilterBackend

from ..models import Room, RoomSerializer


FILTER_FIELDS = [
    "title",
    "price",
    "size",
    "max_people",
    "hotel",
]

class RoomView(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = FILTER_FIELDS
    ordering_fields = FILTER_FIELDS

    @decorators.action(detail=False, methods=['delete'])
    def wipe(self, request, *args, **kwargs):
        objects = Room.objects.all()
        for object in objects:
            object.delete()

        return response.Response("Data was wiped", status=exceptions.status.HTTP_200_OK)