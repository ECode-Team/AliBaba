from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend

from ..models import Review, ReviewSerializer

FILTER_FIELDS = [
    "date",
    "mark",
    "hotel",
]

class ReviewView(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = FILTER_FIELDS
    ordering_fields = FILTER_FIELDS
