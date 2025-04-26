from rest_framework import viewsets

from ..models import TripBook, TripBookSerializer


class TripBookView(viewsets.ModelViewSet):
    queryset = TripBook.objects.all()
    serializer_class = TripBookSerializer
