# Trabalhando com Arquivos em Python

# Modos de abertura de arquivos: 'r' (leitura), 'w' (escrita), 'a' (append), 'r+' (leitura + escrita).

# Métodos essenciais: open(), read(), write(), close().

# Exemplo de uso:

# Criando e escrevendo em um arquivo
with open('dados.txt', 'w') as arquivo:
    arquivo.write("Nome: João\nIdade: 30\nProfissão: Desenvolvedor")

# Lendo o arquivo
with open('dados.txt', 'r') as arquivo:
    conteudo = arquivo.read()
    print(conteudo)

# Adicionando mais dados (append)
with open('dados.txt', 'a') as arquivo:
    arquivo.write("\nEmail: joao@email.com")

# Excluindo o arquivo (importar módulo 'os')
import os
if os.path.exists('dados.txt'):
    os.remove('dados.txt')
    print("Arquivo removido!")
else:
    print("Arquivo não encontrado.")


###

#Exemplo com funções:

with open('dados.txt', 'r') as arquivo:
    for linha in arquivo:
        print(linha.strip())  #remove '\n'

def ler_arquivo(nome_arquivo):
    """Lê e retorna o conteúdo de um arquivo."""
    with open(nome_arquivo, 'r') as arquivo:
        return arquivo.read()

def escrever_arquivo(nome_arquivo, conteudo):
    """Escreve conteúdo em um arquivo."""
    with open(nome_arquivo, 'w') as arquivo:
        arquivo.write(conteudo)

# Testando as funções
escrever_arquivo('exemplo.txt', 'BOMBARDILLO CROCODILLO')
print(ler_arquivo('exemplo.txt'))

###

# Exemplo para Atividade em Aula:
def contar_linhas(nome_arquivo):
    """Retorna o número de linhas de um arquivo."""
    with open(nome_arquivo, 'r') as arquivo:
        return len(arquivo.readlines())

print(contar_linhas('usuarios.txt'))