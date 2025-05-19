# meu_app/models.py
from django.db import models
from django.contrib.auth.models import User

# Modelo para produtos com imagem
class Produto(models.Model):
    nome = models.CharField(max_length=100)
    imagem = models.ImageField(
        upload_to='produtos/',  # Salva em media/produtos/
        blank=True,             # Opcional
        null=True               # Pode ser nulo
    )
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    disponivel = models.BooleanField(default=True)
    
    def __str__(self):
        return self.nome
    
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pic = models.ImageField(
        upload_to='profile_pics/',  # Pasta dentro de MEDIA_ROOT
        default='profile_pics/default.jpeg'
    )
    bio = models.TextField(blank=True)

    def __str__(self):
        return f"{self.user.username}'s Profile"