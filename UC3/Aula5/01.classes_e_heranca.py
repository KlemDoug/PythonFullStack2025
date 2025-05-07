#POO em Python:

#Conceitos Teóricos:

#Classes vs. Objetos:
''' 
class ContaBancaria:
    def __init__(self, titular, saldo=0):
        self.titular = titular  # Atributo
        self.saldo = saldo      # Atributo

conta1 = ContaBancaria("João")  # Objeto
'''
#Métodos:
'''
def depositar(self, valor):
    self.saldo += valor
    '''
#Herança:
'''
class ContaPoupanca(ContaBancaria):  # Herda de ContaBancaria
    def render_juros(self, taxa):
        self.saldo *= (1 + taxa)
        '''


class ContaBancaria:
    """Classe que representa uma conta bancária genérica.
    
    Atributos:
        numero_conta (str): Número identificador da conta.
        titular (str): Nome do titular da conta.
        saldo (float): Saldo atual da conta (inicia em 0 por padrão).
    """
    
    def __init__(self, numero_conta, titular, saldo=0):
        """Inicializa a conta com número, titular e saldo opcional."""
        self.numero_conta = numero_conta
        self.titular = titular
        self.saldo = saldo

    def depositar(self, valor):
        """Adiciona um valor ao saldo da conta.
        
        Args:
            valor (float): Valor a ser depositado (deve ser positivo).
        
        Returns:
            str: Mensagem de confirmação com novo saldo.
        """
        if valor > 0:
            self.saldo += valor
            return f"Depósito de R${valor} realizado. Novo saldo: R${self.saldo}"
        return "Valor inválido para depósito!"
    
    def sacar(self, valor):
        """Subtrai um valor do saldo, se houver fundos suficientes.
        
        Args:
            valor (float): Valor a ser sacado.
        
        Returns:
            str: Mensagem de confirmação ou erro.
        """
        if valor > 0 and self.saldo >= valor:
            self.saldo -= valor
            return f"Saque de R${valor} realizado. Novo saldo: R${self.saldo}"
        return "Saldo insuficiente ou valor inválido!"

    def transferir(self, outra_conta, valor):
        """Transfere valor para outra conta, se houver saldo.
        
        Args:
            outra_conta (ContaBancaria): Objeto da conta destino.
            valor (float): Valor a transferir.
        
        Returns:
            str: Mensagem de confirmação ou erro.
        """
        if self.sacar(valor) != "Saldo insuficiente ou valor inválido!":
            outra_conta.depositar(valor)
            return f"Transferência de R${valor} para {outra_conta.titular} realizada."
        return "Transferência falhou!"
    
class ContaPoupanca(ContaBancaria):
    """Classe que representa uma conta poupança, herdando de ContaBancaria.
    
    Adiciona funcionalidade de render juros.
    """
    
    def render_juros(self, taxa):
        """Aumenta o saldo com base em uma taxa de juros.
        
        Args:
            taxa (float): Taxa de juros (ex: 0.05 para 5%).
        
        Returns:
            str: Mensagem com novo saldo.
        """
        if 0 < taxa < 1:
            self.saldo *= (1 + taxa)
            return f"Juros de {taxa*100}% aplicados. Novo saldo: R${self.saldo}"
        return "Taxa de juros inválida!"
    
conta_poup = ContaPoupanca("789", "Maria", 1000)
print(conta_poup.render_juros(0.1))  # Saída: "Juros de 10.0% aplicados. Novo saldo: R$1100.0"