#Sets (Mutáveis, não ordenados, únicos)

# Criando e operações:
conjunto = {1, 2, 3, 4, 4}  # Remove duplicatas → {1, 2, 3, 4}
print(conjunto)              # Saída: {1, 2, 3, 4}
conjunto.add(5)              # Adiciona valor → {1, 2, 3, 4, 5}
print(conjunto)
conjunto.discard(2)          # Remove se existir → {1, 3, 4, 5}
print(conjunto)

# Operações matemáticas:
outro_conjunto = {3, 4, 5, 6}
print(conjunto.union(outro_conjunto))           # União → {1, 3, 4, 5, 6}
print(conjunto.intersection(outro_conjunto))    # Interseção → {3, 4, 5}

conjunto.difference_update(outro_conjunto)  # Diferença → {1}
print(conjunto)  # Saída: {1}

conjunto.clear()  # Limpa o conjunto → set()
print(conjunto)