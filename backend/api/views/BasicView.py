from rest_framework import viewsets

from ..models import BasicModel, BasicModelSerializer


class BasicView(viewsets.ModelViewSet):
    queryset = BasicModel.objects.all()
    serializer_class = BasicModelSerializer
