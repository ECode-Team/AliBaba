from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import *
from .views import TripsView

router = DefaultRouter()
router.register("trips", TripsView)

urlpatterns = [
    path("", include(router.urls)),
]
