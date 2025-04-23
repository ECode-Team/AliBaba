from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import *
from .views import Tripsview

router = DefaultRouter()
router.register("trips", Tripsview,basename="trips")

urlpatterns = [
    path("basic_model/", BasicModelView.as_view(), name="basic_model"),
    path("basic_model/<int:pk>", BasicModelView.as_view(), name="basic_model"),

    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('logout/', LogoutView.as_view(), name='logout'),

    path('hotel/', HotelView.as_view(), name="hotel"),
    path('hotel/<int:pk>', HotelView.as_view(), name="hotel"),

    path('room/', RoomView.as_view(), name="room"),
    path('room/<int:pk>', RoomView.as_view(), name="room"),
  
    path("", include(router.urls)),
]
