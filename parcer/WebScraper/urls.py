from django.urls import path
from . import views

urlpatterns = [
	path("", views.index, name="index"),

	# API Routes
	path("parse", views.parse, name="parse"),
]