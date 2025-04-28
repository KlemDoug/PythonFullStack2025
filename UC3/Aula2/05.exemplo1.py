def calcular_imc():
    peso = float(input("Digite seu peso (kg): "))
    altura = float(input("Digite sua altura (m): "))
    
    imc = peso / (altura ** 2)
    
    print(f"Seu IMC é {imc:.2f}")
    
    if imc < 18.5:
        print("Classificação: Magreza")
    elif imc < 25:
        print("Classificação: Normal")
    elif imc < 30:
        print("Classificação: Sobrepeso")
    elif imc < 40:
        print("Classificação: Obesidade")
    else:
        print("Classificação: Obesidade Grave")

calcular_imc()