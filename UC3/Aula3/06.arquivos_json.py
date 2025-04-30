'''
Você foi contratado para desenvolver uma API para um sistema de usuários.
Os dados devem ser armazenados em memória (antes de migrar para um banco de dados) e retornados no formato JSON.
'''
#Exemplo de Execução:
import json

# Banco de dados em memória (simulado com dicionário)
usuarios = {
    1: {"nome": "Carlos", "email": "carlos@exemplo.com", "nivel": "admin"},
    2: {"nome": "Maria", "email": "maria@exemplo.com", "nivel": "user"}
}

# Função para retornar todos os usuários em JSON:
def get_usuarios():
    return json.dumps(usuarios, indent=2)  # Formatação legível

# Função para adicionar novo usuário
def add_usuario(id, nome, email, nivel):
    usuarios[id] = {"nome": nome, "email": email, "nivel": nivel}
    return json.dumps({"status": "sucesso", "id": id}, indent=2)

# Testando
print("=== Todos os usuários ===")
print(get_usuarios())

print("\n=== Adicionando usuário ===")
print(add_usuario(3, "João", "joao@exemplo.com", "user"))

print("\n=== Lista atualizada ===")
print(get_usuarios())
