from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import *

router = DefaultRouter()
routes = [
    ("basic", BasicView),
    ("hotel", HotelView),
    ("room", RoomView),
    ("trip", TripsView),
]

for route, view in routes:
    router.register(route, view)

urlpatterns = [
    path("", include(router.urls)),

    path('user/register/', RegisterView.as_view(), name='register'),
    path('user/login/', LoginView.as_view(), name='login'),
    path('user/profile/', ProfileView.as_view(), name='profile'),
    path('user/logout/', LogoutView.as_view(), name='logout'),
]
