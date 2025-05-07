# Crie um programa que:
'''
Armazene usuários (nome, e-mail) em um arquivo.
Liste todos os usuários.
Permita excluir um usuário.
'''

#Resolucão:

def adicionar_usuario(nome, email):
    """Adiciona um usuário ao arquivo."""
    with open('usuarios.txt', 'a') as arquivo:
        arquivo.write(f"{nome},{email}\n")

def listar_usuarios():
    """Lista todos os usuários."""
    try:
        with open('usuarios.txt', 'r') as arquivo:
            for linha in arquivo:
                nome, email = linha.strip().split(',')
                print(f"Nome: {nome}, Email: {email}")
    except FileNotFoundError:
        print("Nenhum usuário cadastrado.")

def remover_usuario(email):
    """Remove um usuário do arquivo."""
    with open('usuarios.txt', 'r') as arquivo:
        linhas = arquivo.readlines()
    with open('usuarios.txt', 'w') as arquivo:
        for linha in linhas:
            if email not in linha:
                arquivo.write(linha)
    print("Usuário removido!")

# Testando
adicionar_usuario("Ana", "ana@email.com")
adicionar_usuario("Carlos", "carlos@email.com")
listar_usuarios()
remover_usuario("ana@email.com")