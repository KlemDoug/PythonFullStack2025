#  Métodos Getter e Setter em Python

# @property (Getter - OBTER DE FORMA CONTROLADA): transforma um método em um atributo de 'apenas leitura';
# Útil para calcular valores dinâmicos ou proteger dados sensíveis.

# @atributo.setter (Setter - ALTERAR DE FORMA CONTROLADA): permite validar/modificar valores antes de atribuí-los;
#Evita atribuições inválidas (ex: e-mail sem "@").

class Usuario:
    def __init__(self, nome, email):
        self._nome = nome  # Atributo "protegido" (convenção)
        self._email = None
        self.email = email  # Usa o setter abaixo

    # Getter para email:
    @property
    def email(self):
        return self._email

    # Setter para email:
    @email.setter
    def email(self, valor):
        if "@" not in valor:
            raise ValueError("E-mail inválido! Deve conter '@'.")
        self._email = valor

    # Getter para nome:
    @property
    def nome(self):
        return self._nome.title()  # Retorna com primeira letra maiúscula

    # Setter para nome:
    @nome.setter
    def nome(self, valor):
        if len(valor) < 3:
            raise ValueError("Nome deve ter pelo menos 3 caracteres.")
        self._nome = valor

# Uso:
usuario = Usuario("joão", "joao@exemplo.com")
print(usuario.email)  # Saída: joao@exemplo.com
usuario.nome = "ana"  # Usa o setter de nome
print(usuario.nome)   # Saída: Ana