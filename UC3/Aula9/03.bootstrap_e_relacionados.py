# AULA 9 - DJANGO + BOOTSTRAP: NAVBAR, TEMPLATES DINÂMICOS E ADMIN

"""
ETAPA 1: CONFIGURAÇÃO INICIAL
---------------------------------"""
# Verifique se seu app está registrado em settings.py
INSTALLED_APPS = [
    # ... apps padrão ...
    'meuapp',  # ← Seu app deve estar aqui
]

# No terminal, instale o Bootstrap via CDN (ou npm se preferir)
# pip install django-bootstrap5 (opcional)

"""
ETAPA 2: CRIAÇÃO DO TEMPLATE BASE
---------------------------------"""
# Crie o arquivo meuapp/templates/meuapp/base.html com:

"""
{% load static %}
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% block title %}{% endblock %}</title>
    <!-- Bootstrap CSS via CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    {% include 'meuapp/navbar.html' %}  <!-- Navbar separada -->
    
    <div class="container mt-4">
        {% block content %}{% endblock %}
    </div>

    <!-- Rodapé -->
    <footer class="bg-light text-center p-3 mt-5">
        <p>&copy; {% now "Y" %} Minha Empresa. Todos os direitos reservados.</p>
    </footer>

    <!-- Bootstrap JS + Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
"""

"""
ETAPA 3: NAVBAR COM BOOTSTRAP
---------------------------------"""
# Crie meuapp/templates/meuapp/navbar.html com:

"""
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="{% url 'home' %}">Meu Site</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="{% url 'home' %}">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{% url 'produtos' %}">Produtos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{% url 'contato' %}">Contato</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
"""

"""
ETAPA 4: MODELO DE PRODUTOS
---------------------------------"""
# Em meuapp/models.py:

from django.db import models

class Produto(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    disponivel = models.BooleanField(default=True)
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome

"""
ETAPA 5: VIEWS E URLS
---------------------------------"""
# Em meuapp/views.py:

from django.shortcuts import render
from .models import Produto

def home(request):
    return render(request, 'meuapp/home.html')

def produtos(request):
    produtos = Produto.objects.all()
    return render(request, 'meuapp/produtos.html', {'produtos': produtos})

# Em meuapp/urls.py:

from django.urls import path
from . import views

app_name = 'meuapp'

urlpatterns = [
    path('', views.home, name='home'),
    path('produtos/', views.produtos, name='produtos'),
    # Adicione outras URLs conforme necessário
]

"""
ETAPA 6: TEMPLATE DE PRODUTOS
---------------------------------"""
# Crie meuapp/templates/meuapp/produtos.html:

"""
{% extends 'meuapp/base.html' %}

{% block content %}
<div class="container">
    <h2 class="mb-4">Nossos Produtos</h2>
    
    <div class="row row-cols-1 row-cols-md-3 g-4">
        {% for produto in produtos %}
        <div class="col">
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">{{ produto.nome }}</h5>
                    <p class="card-text">{{ produto.descricao }}</p>
                    <p class="text-success fw-bold">R$ {{ produto.preco }}</p>
                </div>
            </div>
        </div>
        {% empty %}
        <div class="alert alert-info">Nenhum produto disponível.</div>
        {% endfor %}
    </div>
</div>
{% endblock %}
"""

"""
ETAPA 7: CONFIGURAR DJANGO ADMIN
---------------------------------"""
# Em meuapp/admin.py:

from django.contrib import admin
from .models import Produto

admin.site.register(Produto)

# Execute no terminal:
"""
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
"""

"""
ETAPA 8: COMANDOS ÚTEIS
---------------------------------"""
# Para testar localmente:
"""
python manage.py runserver
"""

"""
Acesse:
- http://localhost:8000/admin (para o painel de administração)
- http://localhost:8000/produtos (para ver os produtos)

Documentação útil:
- Bootstrap 5: https://getbootstrap.com/docs/5.3/getting-started/introduction/
- Django Templates: https://docs.djangoproject.com/en/5.0/topics/templates/
- Django Admin: https://docs.djangoproject.com/en/5.0/ref/contrib/admin/
"""

"""
ETAPA 9: MUITA ATENÇÃO!
---------------------------------

- Sempre use {% url 'nome_da_url' %} em vez de caminhos fixos
- Organize os templates em pastas com o nome do app (meuapp/templates/meuapp/)
- Para produção, configure STATIC_ROOT e execute collectstatic
- Use migrações sempre que alterar modelos!!!! NO TERMINAL:

python manage.py makemigrations
python manage.py migrate
"""
