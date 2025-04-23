from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import *
from .views import TripsView, BasicView, HotelView, RoomView

router = DefaultRouter()
routes = [
    ("basic", BasicView),
    ("hotel", HotelView),
    ("room", RoomView),
    ("trips", TripsView),
]

for route, view in routes:
    router.register(route, view)

urlpatterns = [
    path("", include(router.urls)),
]
