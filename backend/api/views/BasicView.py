from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend

from ..models import BasicModel, BasicModelSerializer


class BasicView(viewsets.ModelViewSet):
    queryset = BasicModel.objects.all()
    serializer_class = BasicModelSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'