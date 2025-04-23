from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, status
from django.core.exceptions import ObjectDoesNotExist

from backend.api.models import Room, RoomSerializer


class RoomView(APIView):
    @staticmethod
    def get_one(request, pk):
        try:
            model = Room.objects.get(id=pk)
            serializer = RoomSerializer(model)
            return Response(serializer.data, status=status.HTTP_200_OK)

        except ObjectDoesNotExist:
            return Response(NotFound.default_detail, status=status.HTTP_404_NOT_FOUND)

    @staticmethod
    def get_all(request):
        model = Room.objects.all()
        return Response(RoomSerializer(model, many=True).data, status=status.HTTP_200_OK)

    @staticmethod
    def get(request, pk = None):
        if pk:
            return RoomView.get_one(request, pk)
        else:
            return RoomView.get_all(request)

    @staticmethod
    def post(request, pk = None):
        serializer = RoomSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @staticmethod
    def put(request, pk = None):
        try:
            model = Room.objects.get(id=pk)
            serializer_init = RoomSerializer(model)

            serializer_new = RoomSerializer(model, data={
                **serializer_init.data,
                **request.data
            })

            if serializer_new.is_valid():
                serializer_new.save()
                return Response(serializer_new.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer_new.errors, status=status.HTTP_400_BAD_REQUEST)

        except ObjectDoesNotExist:
            err = NotFound.default_detail if pk else NotFound.default_detail + " Primary key field is empty"
            return Response(err, status=status.HTTP_404_NOT_FOUND)

    @staticmethod
    def delete(request, pk = None):
        try:
            model = Room.objects.get(id=pk)
            model.delete()
            return Response(status.HTTP_200_OK, status=status.HTTP_200_OK)

        except ObjectDoesNotExist:
            err = NotFound.default_detail if pk else NotFound.default_detail + " Primary key field is empty"
            return Response(err, status=status.HTTP_404_NOT_FOUND)