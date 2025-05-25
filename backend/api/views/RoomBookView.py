from rest_framework import viewsets, filters, decorators, response, exceptions
from django_filters.rest_framework import DjangoFilterBackend

from ..models import RoomBook, RoomBookSerializer


class RoomBookView(viewsets.ModelViewSet):
    queryset = RoomBook.objects.all()
    serializer_class = RoomBookSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'


    @decorators.action(detail=False, methods=['delete'])
    def wipe(self, request, *args, **kwargs):
        objects = RoomBook.objects.all()
        for object in objects:
            object.delete()

        return response.Response("Data was wiped",  status=exceptions.status.HTTP_200_OK)