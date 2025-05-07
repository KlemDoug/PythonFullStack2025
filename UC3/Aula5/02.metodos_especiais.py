class ContaBancaria:
    """Classe que demonstra métodos especiais em Python.
    
    Atributos:
        numero (str): Número da conta.
        titular (str): Nome do titular.
        saldo (float): Saldo atual.
    """
    
    def __init__(self, numero, titular, saldo=0):
        """Método especial __init__: inicializa o objeto."""
        self.numero = numero
        self.titular = titular
        self.saldo = saldo

    # Métodos especiais mais comuns:
    
    def __str__(self):
        """Método especial __str__: representação legível para humanos.
        
        Usado por print() e str().
        """
        return f"Conta {self.numero} | Titular: {self.titular} | Saldo: R${self.saldo:.2f}"
    
    def __repr__(self):
        """Método especial __repr__: representação técnica.
        
        Usado em debug e pelo interpretador.
        """
        return f"ContaBancaria(numero='{self.numero}', titular='{self.titular}', saldo={self.saldo})"
    
    def __eq__(self, other):
        """Método especial __eq__: comparação de igualdade (==).
        
        Compara pelo número da conta.
        """
        return self.numero == other.numero
    
    def __add__(self, valor):
        """Método especial __add__: sobrecarga do operador +.
        
        Permite syntax: conta + valor (depósito).
        """
        if valor > 0:
            self.saldo += valor
            return self
        raise ValueError("Valor deve ser positivo")
    
    def __len__(self):
        """Método especial __len__: retorna 'tamanho' da conta.
        
        Neste caso, número de caracteres no nome do titular.
        """
        return len(self.titular)
    
    def __getitem__(self, key):
        """Método especial __getitem__: acesso por índice/conteiner.
        
        Permite syntax: conta['saldo'].
        """
        if key in ['numero', 'titular', 'saldo']:
            return getattr(self, key)
        raise KeyError(f"Atributo {key} não existe")

    # --- Métodos bancários tradicionais ---
    def depositar(self, valor):
        self.saldo += valor
        return f"Depósito de R${valor:.2f} realizado."

    def sacar(self, valor):
        if self.saldo >= valor:
            self.saldo -= valor
            return f"Saque de R${valor:.2f} realizado."
        return "Saldo insuficiente!"

# --- Testando os métodos especiais ---
if __name__ == "__main__":
    # Criando contas
    conta1 = ContaBancaria("123", "Ana Silva", 1000)
    conta2 = ContaBancaria("456", "Carlos Oliveira")
    
    # __str__ e __repr__
    print(conta1)          # Saída: Conta 123 | Titular: Ana Silva | Saldo: R$1000.00
    print(repr(conta2))    # Saída: ContaBancaria(numero='456', titular='Carlos Oliveira', saldo=0)
    
    # __eq__
    print(conta1 == conta2)  # Saída: False
    
    # __add__
    conta1 + 500           # Deposita 500 usando operador +
    print(conta1.saldo)    # Saída: 1500
    
    # __len__
    print(len(conta1))     # Saída: 9 (tamanho do nome "Ana Silva")
    
    # __getitem__
    print(conta1['saldo']) # Saída: 1500.0