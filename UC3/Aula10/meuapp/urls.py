# meu_app/urls.py
from django.urls import path
from . import views

app_name = 'meuapp'  # Namespace para evitar conflitos

urlpatterns = [
    path('', views.home, name='home'),
    path('produtos/', views.produtos, name='produtos'),
    path('contatos/', views.contatos, name='contatos'),
    path('add-produto/', views.add_produto, name='add_produto'),
]