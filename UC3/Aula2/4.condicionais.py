# Exemplo básico
nota = float(input("Digite sua nota (0-10): "))

if nota >= 9:
    conceito = "A"
elif nota >= 7:
    conceito = "B"
elif nota >= 5:
    conceito = "C"
else:
    conceito = "D"

print(f"Seu conceito é {conceito}")

# Operadores lógicos
idade = int(input("Digite sua idade: "))
tem_ingresso = input("Tem ingresso? (s/n): ").lower() == 's'

if idade >= 18 and tem_ingresso:
    print("Acesso permitido ao evento.")
elif idade < 18 and tem_ingresso:
    print("Acesso permitido apenas com responsável.")
else:
    print("Acesso negado.")

# Operador ternário
status = "Aprovado" if nota >= 5 else "Reprovado"
print(status)