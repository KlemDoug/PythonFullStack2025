import math

def calculadora():
    operacoes = {
        '+': lambda x, y: x + y,
        '-': lambda x, y: x - y,
        '*': lambda x, y: x * y,
        '/': lambda x, y: x / y,
        '^': lambda x, y: x ** y,
        '√': lambda x: math.sqrt(x),
        'sen': lambda x: math.sin(math.radians(x)),
        'cos': lambda x: math.cos(math.radians(x)),
        'tan': lambda x: math.tan(math.radians(x))
    }
    
    while True:
        print("\nOperações disponíveis:")
        print("+, -, *, /, ^ (potência), √ (raiz), sen, cos, tan")
        print("Digite 'sair' para encerrar")
        
        op = input("Operação: ")
        
        if op.lower() == 'sair':
            break
        
        if op in ['√', 'sen', 'cos', 'tan']:
            num = float(input("Número: "))
            try:
                resultado = operacoes[op](num)
                print(f"Resultado: {resultado:.4f}")
            except ValueError as e:
                print(f"Erro: {e}")
        elif op in operacoes:
            num1 = float(input("Primeiro número: "))
            num2 = float(input("Segundo número: "))
            try:
                resultado = operacoes[op](num1, num2)
                print(f"Resultado: {resultado:.4f}")
            except ZeroDivisionError:
                print("Erro: Divisão por zero!")
            except Exception as e:
                print(f"Erro: {e}")
        else:
            print("Operação inválida!")

calculadora()