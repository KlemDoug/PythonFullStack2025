/***********************************************
 * SISTEMA DE RESERVAS DE HOTEL
 ***********************************************/
class Hotel {
    constructor(nome, cidade, quartosDisponiveis) {
        this.nome = nome;
        this.cidade = cidade;
        this.quartosDisponiveis = quartosDisponiveis;
        this.reservas = [];
    }

    reservarQuarto(cliente, dataInicio, dataFim) {
        if (this.quartosDisponiveis > 0) {
            const reserva = {
                cliente: cliente,
                dataInicio: dataInicio,
                dataFim: dataFim,
                status: 'Confirmada'
            };
            this.reservas.push(reserva);
            this.quartosDisponiveis--;
            cliente.historicoReservas.push(reserva);
            console.log(`Reserva confirmada para ${cliente.nome} no ${this.nome}`);
            return reserva;
        } else {
            console.log('Não há quartos disponíveis');
            return null;
        }
    }

    cancelarReserva(reserva) {
        const index = this.reservas.indexOf(reserva);
        if (index !== -1) {
            this.reservas.splice(index, 1);
            this.quartosDisponiveis++;
            reserva.status = 'Cancelada';
            console.log(`Reserva cancelada para ${reserva.cliente.nome}`);
            return true;
        }
        console.log('Reserva não encontrada');
        return false;
    }
}

class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
        this.historicoReservas = [];
    }

    verHistorico() {
        console.log(`Histórico de reservas de ${this.nome}:`);
        this.historicoReservas.forEach((reserva, i) => {
            console.log(`${i + 1}. ${reserva.dataInicio} a ${reserva.dataFim} - Status: ${reserva.status}`);
        });
    }
}

// Teste do Sistema de Hotel
const hotel = new Hotel('Praia Dourada', 'Rio de Janeiro', 10);
const cliente1 = new Cliente('João Silva', '123.456.789-00');
const cliente2 = new Cliente('Maria Souza', '987.654.321-00');

const reserva1 = hotel.reservarQuarto(cliente1, '2023-12-01', '2023-12-10');
const reserva2 = hotel.reservarQuarto(cliente2, '2023-12-15', '2023-12-20');

hotel.cancelarReserva(reserva1);
cliente1.verHistorico();
cliente2.verHistorico();

/***********************************************
 * JOGO DE RPG SIMPLES
 ***********************************************/
class Personagem {
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }

    atacar(alvo) {
        const dano = Math.max(0, this.ataque - alvo.defesa);
        alvo.vida -= dano;
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano!`);
        if (alvo.vida <= 0) {
            console.log(`${alvo.nome} foi derrotado!`);
        }
    }
}

class Guerreiro extends Personagem {
    constructor(nome) {
        super(nome, 120, 30, 20);
        this.habilidade = 'Espada Afiada';
    }

    usarHabilidadeEspecial(alvo) {
        const dano = this.ataque * 1.5 - alvo.defesa;
        alvo.vida -= dano;
        console.log(`${this.nome} usou ${this.habilidade} causando ${dano} de dano!`);
    }
}

class Mago extends Personagem {
    constructor(nome) {
        super(nome, 80, 40, 10);
        this.habilidade = 'Bola de Fogo';
        this.mana = 100;
    }

    usarHabilidadeEspecial(alvo) {
        if (this.mana >= 30) {
            const dano = this.ataque * 2 - alvo.defesa;
            alvo.vida -= dano;
            this.mana -= 30;
            console.log(`${this.nome} usou ${this.habilidade} causando ${dano} de dano!`);
        } else {
            console.log('Mana insuficiente!');
        }
    }
}

class Arqueiro extends Personagem {
    constructor(nome) {
        super(nome, 90, 35, 15);
        this.habilidade = 'Chuva de Flechas';
    }

    usarHabilidadeEspecial(alvo) {
        const dano = (this.ataque - alvo.defesa) * 3;
        alvo.vida -= dano;
        console.log(`${this.nome} usou ${this.habilidade} causando ${dano} de dano!`);
    }
}

// Teste do Jogo de RPG
const guerreiro = new Guerreiro('Conan');
const mago = new Mago('Gandalf');
const arqueiro = new Arqueiro('Legolas');

guerreiro.usarHabilidadeEspecial(mago);
mago.usarHabilidadeEspecial(arqueiro);
arqueiro.usarHabilidadeEspecial(guerreiro);

guerreiro.atacar(mago);
mago.atacar(arqueiro);
arqueiro.atacar(guerreiro);

/***********************************************
 * SISTEMA DE PEDIDOS ONLINE
 ***********************************************/
class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    atualizarEstoque(quantidade) {
        this.estoque += quantidade;
        console.log(`Estoque de ${this.nome} atualizado para ${this.estoque}`);
    }
}

class ClienteOnline {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.carrinho = [];
    }

    adicionarAoCarrinho(produto, quantidade) {
        if (produto.estoque >= quantidade) {
            this.carrinho.push({ produto, quantidade });
            console.log(`${quantidade}x ${produto.nome} adicionado ao carrinho`);
        } else {
            console.log(`Estoque insuficiente para ${produto.nome}`);
        }
    }

    calcularTotal() {
        return this.carrinho.reduce((total, item) => {
            return total + (item.produto.preco * item.quantidade);
        }, 0);
    }
}

class Pedido {
    constructor(cliente, itens) {
        this.cliente = cliente;
        this.itens = itens;
        this.total = this.calcularTotal();
        this.status = 'Pendente';
        this.data = new Date();
    }

    calcularTotal() {
        return this.itens.reduce((total, item) => {
            return total + (item.produto.preco * item.quantidade);
        }, 0);
    }

    calcularFrete() {
        // Simulação de cálculo de frete baseado no endereço
        return this.total > 200 ? 0 : 15;
    }

    finalizarCompra() {
        // Verifica estoque antes de finalizar
        for (const item of this.itens) {
            if (item.produto.estoque < item.quantidade) {
                console.log(`Estoque insuficiente para ${item.produto.nome}`);
                return false;
            }
        }

        // Atualiza estoque
        for (const item of this.itens) {
            item.produto.atualizarEstoque(-item.quantidade);
        }

        this.status = 'Concluído';
        console.log(`Pedido no valor de R$${this.total} concluído com sucesso!`);
        return true;
    }
}

// Teste do Sistema de Pedidos Online
const notebook = new Produto('Notebook', 2500, 10);
const celular = new Produto('Celular', 1500, 5);

const clienteOnline = new ClienteOnline('Carlos', 'Rua Principal, 123');
clienteOnline.adicionarAoCarrinho(notebook, 1);
clienteOnline.adicionarAoCarrinho(celular, 2);

const pedido = new Pedido(clienteOnline, clienteOnline.carrinho);
console.log(`Total do pedido: R$${pedido.calcularTotal()}`);
console.log(`Frete: R$${pedido.calcularFrete()}`);

pedido.finalizarCompra();