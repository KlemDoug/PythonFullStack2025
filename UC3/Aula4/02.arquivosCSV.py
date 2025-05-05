import csv

# Escrevendo em CSV
with open('dados.csv', 'w', newline='') as arquivo_csv:
    escritor = csv.writer(arquivo_csv)
    escritor.writerow(["Nome", "Idade", "Cidade"])
    escritor.writerow(["Ana", 25, "Sao Paulo"])
    escritor.writerow(["Carlos", 30, "Rio de Janeiro"])

# Lendo CSV
with open('dados.csv', 'r') as arquivo_csv:
    leitor = csv.reader(arquivo_csv)
    for linha in leitor:
        print(linha)

#EXTRA: Lendo CSV com pandas
import pandas as pd # Para instalar: pip install pandas

df = pd.read_csv('dados.csv')
print(df.head())  # Exibe as primeiras linhas