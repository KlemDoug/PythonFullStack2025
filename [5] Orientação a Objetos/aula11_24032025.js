/////////////////////////////////////////////////////
//  Orientação a Objetos em JavaScript - Aula 11   //
/////////////////////////////////////////////////////

/*
 * VERSÃO PROCEDURAL (SEM POO) - PARA 2 CLIENTES
 * 
 * Nesta abordagem, cada cliente é um objeto literal e as operações são funções separadas
 * que manipulam esses objetos. Isso funciona para poucos clientes, mas NÃO ESCALA BEM.
 */

// Definindo dois clientes como objetos literais
let cliente1 = {
    nome: "João Silva",  // Propriedade com nome do titular
    saldo: 1000,         // Propriedade com saldo atual
    conta: "12345-6"     // Propriedade com número da conta
};

let cliente2 = {
    nome: "Maria Souza",
    saldo: 2500,
    conta: "78901-2"
};

/*
 * Função para depósito - recebe um objeto cliente e um valor
 * Adiciona o valor ao saldo do cliente e exibe mensagem
 */
function depositar(cliente, valor) {
    cliente.saldo += valor;  // Incrementa o saldo
    console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${cliente.saldo}`);
}

/*
 * Função para saque - recebe um objeto cliente e um valor
 * Verifica se há saldo suficiente antes de debitar
 */
function sacar(cliente, valor) {
    if (valor > cliente.saldo) {
        console.log("Saldo insuficiente.");  // Validação de saldo
    } else {
        cliente.saldo -= valor;  // Decrementa o saldo
        console.log(`Saque de R$${valor} realizado. Novo saldo: R$${cliente.saldo}`);
    }
}

// Testando as operações
depositar(cliente1, 500);  // Deposita 500 no cliente1
sacar(cliente2, 300);      // Saca 300 do cliente2

//////////////////////////////////////////////////////////////////////////////////////

/*
 * VERSÃO COM PROGRAMAÇÃO ORIENTADA A OBJETOS - ESCALÁVEL
 * 
 * Aqui, nós usamos uma classe ContaBancaria para criar quantas contas forem necessárias.
 * Todas as operações e dados relacionados a uma conta ficam ENCAPSULADOS na classe.
 */

/*
 * Definição da classe ContaBancaria
 * O constructor é chamado quando criamos uma nova conta (new ContaBancaria())
 */
class ContaBancaria {
    constructor(titular, saldoInicial, numeroConta) {
        this.titular = titular;              // Nome do titular da conta
        this.saldo = saldoInicial;           // Saldo inicial
        this.numeroConta = numeroConta;      // Número da conta
        this.extrato = [];                   // Array para armazenar operações
    }

    /*
     * Método para depósito
     * Adiciona valor ao saldo e registra no extrato
     */
    depositar(valor) {
        this.saldo += valor;
        this.extrato.push({                  // Adiciona operação ao extrato
            tipo: "Depósito",
            valor: valor,
            data: new Date().toLocaleString()  // Data formatada
        });
        console.log(`Depósito de R$${valor} realizado para ${this.titular}.`);
    }

    /*
     * Método para saque
     * Verifica saldo antes de debitar e registra no extrato
     * Retorna true/false indicando sucesso/falha
     */
    sacar(valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para ${this.titular}.`);
            return false;
        }
        this.saldo -= valor;
        this.extrato.push({
            tipo: "Saque",
            valor: -valor,  // Valor negativo para saques
            data: new Date().toLocaleString()
        });
        console.log(`Saque de R$${valor} realizado para ${this.titular}.`);
        return true;
    }

    /*
     * Método para transferência entre contas
     * Usa os métodos sacar e depositar para realizar a operação
     * Registra em ambos os extratos
     */
    transferir(valor, contaDestino) {
        if (this.sacar(valor)) {  // Primeiro tenta sacar da conta origem
            contaDestino.depositar(valor);  // Se conseguiu, deposita no destino
            
            // Registra a transferência nos extratos
            this.extrato.push({
                tipo: "Transferência enviada",
                valor: -valor,
                data: new Date().toLocaleString(),
                para: contaDestino.titular
            });
            
            contaDestino.extrato.push({
                tipo: "Transferência recebida",
                valor: valor,
                data: new Date().toLocaleString(),
                de: this.titular
            });
            
            console.log(`Transferência de R$${valor} para ${contaDestino.titular} realizada.`);
        }
    }

    /*
     * Método para exibir extrato
     * Mostra todas as operações e o saldo atual
     */
    verExtrato() {
        console.log(`\nExtrato da conta de ${this.titular}:`);
        console.log("---------------------------------");
        
        // Itera sobre todas as operações no extrato
        this.extrato.forEach(operacao => {
            let detalhes = `${operacao.data} - ${operacao.tipo}: R$${Math.abs(operacao.valor)}`;
            
            // Adiciona informações extras para transferências
            if (operacao.tipo.includes("Transferência")) {
                detalhes += ` ${operacao.tipo.includes("enviada") ? "para" : "de"} ${operacao.de || operacao.para}`;
            }
            
            console.log(detalhes);
        });
        
        console.log("---------------------------------");
        console.log(`Saldo atual: R$${this.saldo}\n`);
    }
}

// Criando instâncias (objetos) da classe ContaBancaria
const conta1 = new ContaBancaria("João Silva", 1000, "12345-6");
const conta2 = new ContaBancaria("Maria Souza", 2500, "78901-2");
const conta3 = new ContaBancaria("Carlos Oliveira", 500, "34567-8");

// Testando operações
conta1.depositar(500);     // João deposita 500
conta2.sacar(300);         // Maria saca 300
conta1.transferir(200, conta3);  // João transfere 200 para Carlos

// Verificando extratos
conta1.verExtrato();  // Mostra extrato da conta1 (João)
conta3.verExtrato();  // Mostra extrato da conta3 (Carlos)