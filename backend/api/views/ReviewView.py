from rest_framework import viewsets

from ..models import Review, ReviewSerializer


class ReviewView(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
