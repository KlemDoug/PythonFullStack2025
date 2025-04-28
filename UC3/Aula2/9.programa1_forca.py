import random
def jogo_da_forca():
    palavras = ["python", "programacao", "computador", "algoritmo", "desenvolvimento"]
    palavra_secreta = random.choice(palavras)
    letras_corretas = set()
    tentativas = 6
    
    while tentativas > 0:
        # Mostra a palavra com letras adivinhadas
        palavra_exibida = ""
        for letra in palavra_secreta:
            if letra in letras_corretas:
                palavra_exibida += letra
            else:
                palavra_exibida += "_"
        print(palavra_exibida)
        
        if palavra_exibida == palavra_secreta:
            print("Parabéns! Você venceu!")
            return
        
        # Pede uma letra
        letra = input("Digite uma letra: ").lower()
        
        if letra in letras_corretas:
            print("Você já tentou essa letra.")
        elif letra in palavra_secreta:
            letras_corretas.add(letra)
            print("Letra correta!")
        else:
            tentativas -= 1
            print(f"Letra incorreta! Tentativas restantes: {tentativas}")
    
    print(f"Game over! A palavra era: {palavra_secreta}")

jogo_da_forca()