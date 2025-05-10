# Tratamento de Exceções:

# Em programação, erros são inevitáveis, mas podemos lidar com eles de forma elegante usando try, except, else e finally.

# Divisão sem tratamento de erro
a = 10
b = 0
print(a / b)  # Isso causará um ZeroDivisionError

# bloco com try-except tradicional:
try:
    a = int(input("Digite o numerador: "))
    b = int(input("Digite o denominador: "))
    resultado = a / b
    print(f"Resultado: {resultado}")
except ZeroDivisionError:
    print("Erro: Divisão por zero não é permitida!")
except ValueError:
    print("Erro: Por favor, digite números inteiros válidos!")

# bloco com else e finally:
try:
    arquivo = open("dados.txt", "r")
    conteudo = arquivo.read()
    print(conteudo)
except FileNotFoundError:
    print("Arquivo não encontrado!")
else:
    print("Leitura do arquivo concluída com sucesso!")
finally:
    print("Executando finally - limpando recursos")
    arquivo.close() if 'arquivo' in locals() else None


# bloco com múltiplos except:

try:
    idade = int(input("Digite sua idade: "))
    if idade < 0:
        raise ValueError("Idade não pode ser negativa!")
    print(f"Você tem {idade} anos.")
except (ValueError, TypeError) as erro:
    print(f"Erro de entrada: {erro}")
except Exception as erro:
    print(f"Erro inesperado: {erro}")

###########################################################

# Boa prática: Exceções específicas primeiro:
'''
try:
    # código que pode falhar
except ValueError:
    # trata erro de valor
except TypeError:
    # trata erro de tipo
except Exception:
    # trata outros erros (genérico por último)
'''

# Documentando exceções esperadas
def dividir(a, b):
    """
    Divide a por b.
    
    Args:
        a: numerador
        b: denominador
        
    Returns:
        Resultado da divisão
        
    Raises:
        ValueError: Se b for zero
        TypeError: Se a ou b não forem números
    """
    if b == 0:
        raise ValueError("Denominador não pode ser zero")
    return a / b

###########################################################

# COMANDOS GIT:

# 1 git clone https://github.com/KlemDoug/nomedorepositorio (clona teu repositório de trabalho existente no Github para a máquina local)

# 2 cd nomedapasta (comando para entrar no diretório correto para adição dos arquivos - o seu repositório)

# 3 ls (exibe todos os arquivos e pastas presentes no repositório; importante para você ter o nome exato do arquivo que pretende add no Github em seguida)

# 4 git add teste.docx (adiciona um arquivo que já está no diretório físico mas que ainda não subiu para o Github; para add uma pasta inteira, coloque '/' no final do nome da pasta (ex: git add UC1/) )

# 5 git commit -m "teste em aula" (envia uma mensagem junto da adição do arquivo; semelhante ao espaço para escrever que temos na interface do navegador do Github)

# 6 git push origin main (comando para enviar o arquivo diretamente ao main branch; existe a opção de rodar 'git push origin master', dependendo do seu branch local)

# 7 git status (comando para verificar se toda a operação funcionou. Em caso positivo, deve haver a mensagem 'nothing to commit, working tree clean' no seu terminal.)

# 8 exit (encerra as atividades no bash com segurança)

# 9 history (retorna o histórico recente de comandos que você utilizou no bash)

# 10 git log (Ver histórico de commits)

# 11 git show <commit-hash> (Ver detalhes de um commit específico)

# 12 git checkout -- <arquivo> (Desfazer modificações não commitadas)

# 13 git revert <commit-hash> (Reverter um commit)

# 14 git reset --hard <commit-hash> (Resetar para um commit anterior (cuidado!))

###########################################################