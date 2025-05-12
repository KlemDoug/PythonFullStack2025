# Iniciando Meu Primeiro Projeto em Django

# REFERÊNCIA:
# https://django-portuguese.readthedocs.io/en/1.0/intro/tutorial01.html
# https://docs.djangoproject.com/en/5.2/intro/tutorial01/

#Preparação do ambiente de desenvolvimento (COMANDOS NO TERMINAL PYTHON):
'''
OBS: Não esqueçam de preparar o ambiente virtual, caso não tenham feito isso ainda!

python -m venv minhamaquinavirtual
minhamaquinavirtual\Scripts\activate

python --version  
pip --version  
pip install django
django-admin --version
'''

#Criando um projeto Django:
'''
django-admin startproject meu_projeto_django
cd meu_projeto_django
python manage.py runserver
'''
#Rotas alternativas: Qual Porta Devo Escolher?
'''
8000	==> Melhor para iniciantes; padrão do Django, gera menos conflitos.
8080	==> Alternativa segura; usada em muitos projetos.
9000	==> Para evitar conflitos; pouco usada por outros serviços.
3000	==> Usada pelos APIs + Front-end; se integra com React/Vue.
5000	==> Alternativa Python usada pelo Flask, mas segura para Django.
'''

#Acessando o projeto:
'''
http://127.0.0.1:8000/
'''

#Criando um aplicativo Django:
'''
python manage.py startapp meu_app_django
'''

#Registrando o aplicativo no projeto:
'''
#meu_projeto_django/settings.py
'''
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'meu_app_django', # Adicione seu aplicativo aqui!!!
]


#Criando uma view simples:
'''
#meu_app_django/views.py
'''
from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    html = """
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meu Site Django</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background: linear-gradient(135deg, #6e8efb, #a777e3);
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                color: white;
                text-align: center;
            }
            .container {
                background: rgba(0, 0, 0, 0.7);
                padding: 2rem;
                border-radius: 15px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            }
            h1 {
                font-size: 2.5rem;
                margin-bottom: 1rem;
            }
            p {
                font-size: 1.2rem;
                margin-bottom: 2rem;
            }
            .btn {
                display: inline-block;
                padding: 10px 20px;
                background: #ff6b6b;
                color: white;
                text-decoration: none;
                border-radius: 5px;
                transition: all 0.3s ease;
            }
            .btn:hover {
                background: #ff5252;
                transform: translateY(-3px);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🌟 Bem-vindo ao Meu Site Django! 🌟</h1>
            <p>Esta é uma página inicial personalizada com HTML + CSS integrado.</p>
            <a href="#" class="btn">Explorar</a>
        </div>
    </body>
    </html>
    """
    return HttpResponse(html)


#Criando uma URL para a view:
'''
#meu_projeto_django/urls.py
'''
from django.contrib import admin
from django.urls import path

from meu_app_django.views import home  # Importe a view aqui!!!
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),  # Rota principal aqui!!!
]

################################################################################

# Atividade:

#Crie pelo menos mais dois projetos além do PROJETO FINAL: academia, senacrj;
#Cada projeto deve conter ao menos uma aplicação (app);
#Cada projeto deve conter ao menos três views;
#Cada projeto deve conter ao menos três urls.

################################################################################