from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend

from ..models import RoomBook, RoomBookSerializer


class RoomBookView(viewsets.ModelViewSet):
    queryset = RoomBook.objects.all()
    serializer_class = RoomBookSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
