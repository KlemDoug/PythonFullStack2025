# Organização dos arquivos de template, arquivos estáticos e arquivos dinâmicos

# Se você já tem as funções home, produtos e contatos (páginas de EXEMPLO) definidas em seu views.py,o arquivo urls.py ficaria assim:

from django.urls import path
from . import views  # Importa as views do seu app

"""
    Configuração de URLs para o projeto Django.
    Define os caminhos (routes) e associa cada um a uma view específica.
    
    Estrutura:
    path('caminho/', view_correspondente, name='nome_da_url')
"""

urlpatterns = [
    
    # Página inicial
    path('', views.home, name='home'),
    
    # Página de produtos
    path('produtos/', views.produtos, name='produtos'),
    
    # Página de contato
    path('contatos/', views.contato, name='contatos'),
]

# o arquivo views.py ficaria assim:

from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, 'home.html')

def produtos(request):
    return render(request, 'produtos.html')

def contatos(request):
    return render(request, 'contatos.html')

# Com isso, precisamos criar os arquivos HTML correspondentes em uma pasta chamada templates dentro do diretório do seu app.
# A estrutura do seu projeto ficaria assim:
'''
meu_projeto/
│
├── meu_app/
│   ├── urls.py       # (o arquivo que mostramos acima)
│   ├── views.py      # (com as funções home, produtos, contato)
│   └── templates/
│       ├── home.html
│       ├── produtos.html
│       └── contato.html
│
└── meu_projeto/
    └── urls.py       # URLs principais (inclui as URLs do app)
'''

# Agora, quando você acessar a URL raiz do seu site (por exemplo, http://localhost:8000/), verá a página inicial.
# Quando acessar http://localhost:8000/produtos/, verá a página de produtos, e assim por diante.


#Estáticos VS Dinâmicos

'''
Em um projeto Django, os arquivos podem ser classificados em estáticos (não mudam com requisições)
e dinâmicos (gerados/modificados em tempo real).
'''
#Arquivos Estáticos (Static Files): são arquivos que não mudam entre requisições e são servidos diretamente ao usuário sem processamento adicional pelo servidor.
'''
Exemplos:
-> CSS (styles.css)
-> JavaScript (scripts.js)
-> Imagens (logo.png, banner.jpg)
-> Fontes (fonts/)
-> Vídeos/PDFs estáticos


<!-- Carregando um arquivo CSS estático -->
<link rel="stylesheet" href="{% static 'meu_app/css/styles.css' %}">

<!-- Imagem estática -->
<img src="{% static 'meu_app/img/logo.png' %}" alt="Logo">

<!-- JavaScript estático -->
<script src="{% static 'meu_app/js/main.js' %}"></script>
'''

# Para usar arquivos estáticos no Django, você deve configurar o diretório de arquivos estáticos no seu settings.py:

'''
meu_projeto/
├── meu_app/
│   ├── static/          # Pasta para arquivos estáticos do app!!! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
│   │   └── meu_app/     # Subpasta com o nome do app (evita conflitos)
│   │       ├── css/
│   │       ├── js/
│   │       └── img/
│   └── ...
├── manage.py
└── meu_projeto/
    ├── settings.py      # Arquivo de configuração principal
    └── ...
'''

# No settings.py, adicione o seguinte:

# Configura a URL base para arquivos estáticos (ex: /static/)
STATIC_URL = '/static/'

# Onde o Django procura arquivos estáticos (em desenvolvimento)
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),       # Pasta global (opcional)
    os.path.join(BASE_DIR, 'meu_app/static') # Pasta do app
]

# Pasta onde os estáticos serão coletados (usando collectstatic)
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# Coletando Arquivos Estáticos para Produção:
# Quando você estiver pronto para deploy, execute (TERMINAL PYTHON):

'''
python manage.py collectstatic
'''
# Isso opia todos os arquivos estáticos dos apps (static/) para STATIC_ROOT.

# Usando Arquivos Estáticos nos Templates:
# Nos arquivos HTML (como home.html), carregue os estáticos assim:

'''
{% load static %}  <!-- Sempre no topo do template -->

<!-- Exemplos de uso -->
<link rel="stylesheet" href="{% static 'meu_app/css/styles.css' %}">
<script src="{% static 'meu_app/js/scripts.js' %}"></script>
<img src="{% static 'meu_app/img/logo.png' %}" alt="Logo">
'''


#Arquivos Dinâmicos (Dynamic Files): são arquivos processados pelo Django antes de serem enviados ao navegador,
#podendo ter conteúdo variável dependendo do contexto (banco de dados, usuário logado etc).
'''
Exemplos:
=> Páginas HTML com lógica Django (home.html, produtos.html)
=> Dados de banco de dados renderizados
=> Formulários interativos (contato.html)
=> Páginas que mudam conforme o usuário (ex.: painel admin) são arquivos que podem ser gerados ou modificados
em tempo real com base nas requisições do usuário.

<!-- Exemplo de conteúdo dinâmico (produtos.html) -->
{% for produto in produtos %}
    <div class="produto">
        <h3>{{ produto.nome }}</h3>  <!-- Variável dinâmica -->
        <p>{{ produto.descricao }}</p>
        <p>Preço: R$ {{ produto.preco }}</p>
    </div>
{% endfor %}

<!-- Formulário dinâmico (contato.html) -->
<form method="post">
    {% csrf_token %}  <!-- Token de segurança dinâmico -->
    {{ form.as_p }}   <!-- Formulário renderizado dinamicamente -->
    <button type="submit">Enviar</button>
</form>
'''

###############################################################################################################