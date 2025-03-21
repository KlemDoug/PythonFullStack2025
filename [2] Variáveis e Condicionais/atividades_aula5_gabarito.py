############################################################
#        Lista de Atividades em Python - Aula 5            #
############################################################

'''1. Cálculo de Desconto em uma Loja:
Declare duas variáveis, preco e desconto, com valores 150.0 e 20, respectivamente.
Calcule o preço final após aplicar o desconto e imprima o resultado.'''

#Resolução:
preco = 150.0
desconto = 20
preco_final = preco - (preco * desconto / 100)
print("Preço final após desconto:", preco_final)


'''2. Cálculo de IMC (Índice de Massa Corporal):
Declare duas variáveis, peso e altura, com valores 70 e 1.75, respectivamente.
Calcule o IMC usando a fórmula: IMC = peso / (altura ** 2).Imprima o resultado.'''

#Resolução:
peso = 70
altura = 1.75
imc = peso / (altura ** 2)
print("Seu IMC é:", imc)


'''3. Verificação de Elegibilidade para um Concurso:
Declare duas variáveis, idade e tem_experiencia, com valores 22 e True, respectivamente.
Verifique se a pessoa é elegível para o concurso (idade maior ou igual a 18 e tem_experiência) e imprima o resultado.'''

#Resolução:
idade = 22
tem_experiencia = True
elegivel = idade >= 18 and tem_experiencia
print("Elegível para o concurso?", elegivel)


'''4. Classificação de Níveis de Acesso:
Declare uma variável nivel_acesso com um valor entre 1 e 3.
Use estruturas condicionais para imprimir:

-"Acesso total" se o nível for 3.
-"Acesso parcial" se o nível for 2.
-"Acesso restrito" se o nível for 1.'
'''

#Resolução:
nivel_acesso = 2
if nivel_acesso == 3:
    print("Acesso total")
elif nivel_acesso == 2:
    print("Acesso parcial")
else:
    print("Acesso restrito")


'''5. Conversão de Temperatura:
Declare uma variável celsius com um valor de temperatura em graus Celsius.
Converta a temperatura para Fahrenheit usando a fórmula: F = (C * 9/5) + 32.
Imprima o resultado.'''

#Resolução:
celsius = 30
fahrenheit = (celsius * 9/5) + 32
print("Temperatura em Fahrenheit:", fahrenheit)


'''6. Verificação de Números Pares e Ímpares:
Declare uma variável numero com um valor inteiro. Use estruturas condicionais para verificar se o número é par ou ímpar e imprima o resultado.'''

#Resolução:
numero = 7
if numero % 2 == 0:
    print("O número é par.")
else:
    print("O número é ímpar.")


'''7. Cálculo de Frete com Base no Peso
Declare uma variável peso com o peso de um pacote em kg. Calcule o frete com base nas seguintes regras:

- Peso até 5 kg: R$ 10.00;
- Peso entre 5 kg e 10 kg: R$ 20.00;
= Peso acima de 10 kg: R$ 30.00;

Imprima o valor do frete.'''

#Resolução:
peso = 8
if peso <= 5:
    frete = 10.0
elif peso <= 10:
    frete = 20.0
else:
    frete = 30.0
print("Valor do frete:", frete)

############################################################
#                     FIM                                  #
############################################################