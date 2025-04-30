#Listas (Mutáveis, ordenadas, aceitam duplicatas)

# Criando e acessando sua lista:
lista_teste = [10, 20, 30, 40]
print(lista_teste[1])  # Saída: 20 (indexação começa em 0)
print(lista_teste[1:3])  # Saída: [20, 30] (fatiamento)
print(lista_teste[-1])  # Saída: 40 (último elemento)
print(lista_teste[-2:])  # Saída: [30, 40] (últimos dois elementos)
print(lista_teste[:2])  # Saída: [10, 20] (primeiros dois elementos) 
print(lista_teste[::2])  # Saída: [10, 30] (elementos em posições pares)
print(lista_teste[::-1])  # Saída: [40, 30, 20, 10] (inversão da lista)   
print(lista_teste[1:4:2])  # Saída: [20, 40] (fatiamento com passo 2)
print(lista_teste[1:])  # Saída: [20, 30, 40] (do índice 1 até o final) 
print(lista_teste[:3])  # Saída: [10, 20, 30] (do início até o índice 2)
print(lista_teste[-3:-1])  # Saída: [20, 30] (do índice -3 até -2)        
print(len(lista_teste))  # Saída: 4 
print(lista_teste.count(20))  # Saída: 1 (conta quantas vezes o valor 20 aparece na lista)

# Métodos essenciais:
lista_teste.append(50)        # Adiciona no final: [10, 20, 30, 40, 50]
print(lista_teste)
lista_teste.insert(1, 15)     # Insere na posição 1: [10, 15, 20, 30, 40, 50]
print(lista_teste)
lista_teste.remove(20)        # Remove o valor 20: [10, 15, 30, 40, 50]
print(lista_teste)
valor = lista_teste.pop(2)    # Remove e retorna o índice 2 (30): [10, 15, 40, 50]
print(lista_teste)
lista_teste.sort()            # Ordena em ordem crescente/alfabética: [10, 15, 40, 50]
print(lista_teste)
lista_teste.reverse()         # Inverte a ordem: [50, 40, 15, 10]
print(lista_teste)
lista_teste.clear()          # Limpa a lista: []
print(lista_teste)