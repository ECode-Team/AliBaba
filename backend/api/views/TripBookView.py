from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend

from ..models import TripBook, TripBookSerializer


class TripBookView(viewsets.ModelViewSet):
    queryset = TripBook.objects.all()
    serializer_class = TripBookSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
