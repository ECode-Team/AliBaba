from rest_framework import viewsets

from ..models import Room, RoomSerializer


class RoomView(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
