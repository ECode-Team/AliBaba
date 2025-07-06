from rest_framework import viewsets, filters, decorators, response, exceptions
from django_filters.rest_framework import DjangoFilterBackend

from ..models import Trip, TripSerializer


class TripsView(viewsets.ModelViewSet):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'

    @decorators.action(detail=False, methods=['delete'])
    def wipe(self, request, *args, **kwargs):
        objects = Trip.objects.all()
        for object in objects:
            object.delete()

        return response.Response("Data was wiped", status=exceptions.status.HTTP_200_OK)