from django.urls import path

from .views import *

urlpatterns = [
    path('basic_model/', BasicModelView.as_view(), name="basic_model"),
    path('basic_model/<int:pk>', BasicModelView.as_view(), name="basic_model"),
]