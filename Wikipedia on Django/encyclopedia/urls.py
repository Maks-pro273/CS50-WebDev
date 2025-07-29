from django.urls import path

from . import views

app_name = "encyclopedia"

urlpatterns = [
    path("", views.index, name="index"),
    path("wiki/<str:article>", views.get_article, name="article"),

    path("search/", views.search, name="search"),
    path("random/", views.random_entry, name="random"),

    path("create/", views.create, name="create"),
    path("wiki/<str:article>/editing/", views.editing, name="editing")


]
