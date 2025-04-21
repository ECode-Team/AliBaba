from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import *
from .views import Tripsview

router = DefaultRouter()
router.register("trips", Tripsview)
urlpatterns = [
    path("", include(router.urls)),
    path("basic_model/", BasicModelView.as_view(), name="basic_model"),
    path("basic_model/<int:pk>", BasicModelView.as_view(), name="basic_model"),
]
