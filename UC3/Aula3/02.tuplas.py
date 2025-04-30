#Tuplas (Imutáveis, ordenadas, aceitam duplicatas)

# Criando e acessando:
tupla_teste = (1, 2, 3, 2)
print(tupla_teste.count(2))   # Conta ocorrências de 2 → 2
print(tupla_teste.index(3))   # Retorna o índice do valor 3 → 2

# Conversão para lista (útil para modificações):
lista_modificavel = list(tupla_teste)

# Criando uma tupla de departamentos:
departamentos = ("RH", "TI", "Vendas")

# Acessando um elemento:
print(departamentos[1])  # Saída: "TI"

departamentos.append("Marketing")  # Adicionaria no final, a princípio: ("RH", "TI", "Vendas", "Marketing") porém, isso não é possível, pois tuplas são imutáveis.
# Tentativa de modificação (erro)!!!!
# departamentos recebendo o elemento "Marketing"  # AttributeError!!!!