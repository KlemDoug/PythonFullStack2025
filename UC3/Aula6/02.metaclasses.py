# Diferenças Fundamentais entre Classes, Metaclasses e Objetos em Python:

# Objeto	==> Instância de uma classe.	obj = MinhaClasse()
# Classe	==> "Molde" que define objetos.	class MinhaClasse:
# Metaclasse ==>	"Molde" que define classes.	class MinhaMeta(type):


# TUDO EM PYTHON EM OBJETO (incluindo classes!):

print(type(1))           # <class 'int'> → Classe 'int'  
print(type(int))         # <class 'type'> → Metaclasse padrão!  
print(type(type))        # <class 'type'> → type é sua própria metaclasse.



# Exemplo de metaclasses: Validar se todas as classes têm um docstring.
class DocMeta(type):
    """Metaclasse que valida docstrings."""
    def __new__(cls, nome, base, espaco_nomes): #método __new__ chamado para validar/modificar atributos da classe.
        if not espaco_nomes.get('__doc__'):
            raise TypeError(f"Classe {nome} deve ter um docstring!")
        return super().__new__(cls, nome, base, espaco_nomes)

class MinhaClasse(metaclass=DocMeta):
    """Esta classe tem docstring, então é válida."""
    pass

# class ClasseInvalida(metaclass=DocMeta):  # Raises TypeError!
#     pass

# Exemplo 2: Registro Automático de Classes em uma Aplicação: Útil para frameworks (ex: ORMs como Django).
class RegistryMeta(type):
    """Metaclasse que registra todas as classes criadas."""
    registry = {}

    def __new__(cls, nome, base, espaco_nomes):
        nova_classe = super().__new__(cls, nome, base, espaco_nomes)
        cls.registry[nome] = nova_classe  # Registra a nova classe
        return nova_classe

class Model(metaclass=RegistryMeta):
    pass

class Usuario(Model):
    pass

class Produto(Model):
    pass

print(RegistryMeta.registry)  
# Saída: {'Model': <class '__main__.Model'>, 'Usuario': <class '__main__.Usuario'>, ...}