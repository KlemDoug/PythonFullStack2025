from django import forms
from .models import Produto, UserProfile

class ProdutoForm(forms.ModelForm):
    class Meta:
        model = Produto
        fields = ['nome', 'imagem', 'preco']  # Campos do formulário

class ProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ['profile_pic']  # Apenas o campo de foto