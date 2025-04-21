from django.urls import path

from .views import *

urlpatterns = [
    path('basic_model/', BasicModelView.as_view(), name="basic_model"),
    path('basic_model/<int:pk>', BasicModelView.as_view(), name="basic_model"),

    path('hotel/', HotelView.as_view(), name="hotel"),
    path('hotel/<int:pk>', HotelView.as_view(), name="hotel"),

    path('room/', RoomView.as_view(), name="room"),
    path('room/<int:pk>', RoomView.as_view(), name="room"),
]