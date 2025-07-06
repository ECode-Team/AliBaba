from rest_framework import viewsets, filters, decorators, response, exceptions
from django_filters.rest_framework import DjangoFilterBackend

from ..models import Review, ReviewSerializer

FILTER_FIELDS = [
    "date",
    "hotel",
]
ORDER_FIELDS = [
    "mark",
    "date",
]

class ReviewView(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = FILTER_FIELDS
    ordering_fields = ORDER_FIELDS


    @decorators.action(detail=False, methods=['delete'])
    def wipe(self, request, *args, **kwargs):
        objects = Review.objects.all()
        for object in objects:
            object.delete()

        return response.Response("Data was wiped",  status=exceptions.status.HTTP_200_OK)
