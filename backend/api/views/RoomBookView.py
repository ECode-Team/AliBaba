from rest_framework import viewsets

from ..models import RoomBook, RoomBookSerializer


class RoomBookView(viewsets.ModelViewSet):
    queryset = RoomBook.objects.all()
    serializer_class = RoomBookSerializer
