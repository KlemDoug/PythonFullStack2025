#Dicionários (Pares chave-valor, mutáveis)

# Criando e manipulando:
dados = {"id": 1, "nome": "Ana", "cargo": "Dev"}
print(dados.get("nome", "endereço"))  # Saída: Ana

# Métodos úteis:
dados.update({"salario": 7000})
print(dados)                         # Adiciona/atualiza chaves → {"id": 1, "nome": "Ana", "cargo": "Dev", "salario": 7000}
cargo = dados.pop("cargo")           # Remove e retorna o valor → cargo = "Dev"
print(dados)                         
print(dados.keys())                  # Retorna todas as chaves → dict_keys(['id', 'nome', 'salario'])
print(list(dados.values()))          # Valores como lista → [1, 'Ana', 7000]

# Criando um dicionário de colaboradores:
colaborador = {
    "id": 101,
    "nome": "Ana Silva",
    "cargo": "Desenvolvedora Back-End"
}

# Adicionando um novo campo:
colaborador["salario"] = 7500.00

# Acessando um valor:
print(colaborador["nome"])  # Saída: "Ana Silva"

# Removendo um campo:
del colaborador["cargo"]    # Remove o campo "cargo"

# Iterando um dicionário:
for chave, valor in colaborador.items():
    print(f"{chave}: {valor}")  # Saída: id: 101, nome: Ana Silva, salario: 7500.0

# Copiando um dicionário:
novo_colaborador = colaborador.copy()   # Cria uma cópia do dicionário colaborador
print(novo_colaborador)  # Saída: {'id': 101, 'nome': 'Ana Silva', 'salario': 7500.0}   

# Limpar um dicionário:
colaborador.clear()  # Limpa o dicionário → {}       
print(colaborador)  # Saída: {}

# Criando um dicionário com compreensão de dicionário:
dicionario_compreensao = {x: x**2 for x in range(5)}  # Cria um dicionário com chaves de 0 a 4 e valores quadrados
print(dicionario_compreensao)  # Saída: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}     

# Criando um dicionário com dicionário aninhado:
dicionario_aninhado = {
    "pessoa1": {
        "nome": "Ana",
        "idade": 25
    },
    "pessoa2": {
        "nome": "João",
        "idade": 30
    }
}       

print(dicionario_aninhado)