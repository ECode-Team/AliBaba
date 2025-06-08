from rest_framework import viewsets, filters, decorators, response, exceptions
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response

from ..models import User, UserSerializer


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'


    @decorators.action(detail=False, methods=['delete'])
    def wipe(self, request, *args, **kwargs):
        objects = User.objects.all()
        for object in objects:
            object.delete()

        return response.Response("Data was wiped",  status=exceptions.status.HTTP_200_OK)


    @decorators.action(detail=False, methods=['post'])
    def login(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')

        user = User.objects.filter(username=username)
        user = User.objects.filter(email=username) if len(user) == 0 else user

        if len(user) == 0:
            return Response(
                exceptions.PermissionDenied("Username or password is incorrect.").detail,
                status=exceptions.status.HTTP_401_UNAUTHORIZED
            )

        user = user[0]

        if user.password != password:
            return Response(
                exceptions.PermissionDenied("Username or password is incorrect.").detail,
                status=exceptions.status.HTTP_401_UNAUTHORIZED
            )

        return Response(UserSerializer(user).data, status=exceptions.status.HTTP_200_OK)

