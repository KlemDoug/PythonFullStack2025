# Exemplo básico
contador = 0
while contador < 5:
    print(contador)
    contador += 1

# Loop com break e continue
while True:
    resposta = input("Digite 'sair' para terminar: ")
    if resposta.lower() == 'sair':
        break
    elif resposta == '':
        continue
    print(f"Você digitou: {resposta}")

# Exemplo: Adivinhe o número
import random
numero_secreto = random.randint(1, 100)
tentativas = 0

while True:
    tentativa = int(input("Adivinhe o número (1-100): "))
    tentativas += 1
    
    if tentativa < numero_secreto:
        print("Muito baixo!")
    elif tentativa > numero_secreto:
        print("Muito alto!")
    else:
        print(f"Parabéns! Você acertou em {tentativas} tentativas.")
        break