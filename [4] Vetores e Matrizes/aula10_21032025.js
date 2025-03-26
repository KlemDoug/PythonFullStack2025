/////////////////////////////////////////////////////
//    MATRIZES em JavaScript - Aula 10             //
/////////////////////////////////////////////////////

// Matriz é uma estrutura de dados BIDIMENSIONAL, composta por linhas e colunas.
// Em JavaScript, representamos matrizes usando ARRAYS de ARRAYS.

// Exemplo:
let matriz1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Acima, temos uma matriz é 3x3, onde cada linha é um array e cada elemento é acessado por matriz[linha][coluna].

// Demonstrações:

// Acessando um elemento da matriz
let matriz2 = [
  [1, 2, 3],
  [3, 6, 9],
  [10, 15, 20]
];

console.log(matriz2[1][2]);

// Percorrendo a matriz e exibindo todos os elementos
for (let i = 0; i < matriz2.length; i++) {
  for (let j = 0; j < matriz2[i].length; j++) {
    console.log(`Elemento na linha ${i}, coluna ${j}: ${matriz2[i][j]}`);
  }
}

// Função para verificar se uma matriz 3x3 é um quadrado mágico (matriz onde a soma dos números em cada linha, coluna e diagonal é a mesma)
function isQuadradoMagico(matriz) {
  // Soma da primeira linha para referência
  let somaReferencia = matriz[0][0] + matriz[0][1] + matriz[0][2];

  // Verificando as somas das linhas
  for (let i = 0; i < 3; i++) {
    let somaLinha = matriz[i][0] + matriz[i][1] + matriz[i][2];
    if (somaLinha !== somaReferencia) return false;
  }

  // Verificando as somas das colunas
  for (let j = 0; j < 3; j++) {
    let somaColuna = matriz[0][j] + matriz[1][j] + matriz[2][j];
    if (somaColuna !== somaReferencia) return false;
  }

  // Verificando as diagonais
  let somaDiagonal1 = matriz[0][0] + matriz[1][1] + matriz[2][2];
  let somaDiagonal2 = matriz[0][2] + matriz[1][1] + matriz[2][0];
  if (somaDiagonal1 !== somaReferencia || somaDiagonal2 !== somaReferencia) return false;

  return true;
}

// Testando a função
let quadradoMagico = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];

console.log(isQuadradoMagico(quadradoMagico)); // saída deve ser true para um quadrado mágico.

// Batalha Naval - tabuleiro 5x5

// Criando o tabuleiro 5x5
let tabuleiro = [
  ['Água', 'Água', 'Água', 'Navio', 'Água'],
  ['Água', 'Navio', 'Água', 'Água', 'Água'],
  ['Água', 'Água', 'Água', 'Navio', 'Água'],
  ['Água', 'Navio', 'Água', 'Água', 'Água'],
  ['Água', 'Água', 'Água', 'Água', 'Navio']
];

// Função para o comando de atirar em uma posição
function atirar(linha, coluna) {
  if (tabuleiro[linha][coluna] === 'Navio') {
    console.log('Você acertou um navio!');
    tabuleiro[linha][coluna] = 'Acerto';
  } else {
    console.log('Você atingiu a água.');
    tabuleiro[linha][coluna] = 'Erro';
  }
}

// Testando a função
atirar(0, 3); // Saída: "Você acertou um navio!"
atirar(1, 1); // Saída: "Você acertou um navio!"
atirar(4, 4); // Saída: "Você acertou um navio!"
atirar(2, 2); // Saída: "Você atingiu a água."

// Atualização com POO - Batalha Naval (26/03/2025)
class BatalhaNaval {
  constructor(tamanho = 8) {
    this.tamanho = tamanho;
    this.tabuleiro = Array.from({ length: tamanho }, () => 
      Array.from({ length: tamanho }, () => 'Água'));
    this.naviosRestantes = 5;
    
    // Posicionar navios aleatoriamente
    for (let i = 0; i < this.naviosRestantes; i++) {
      let linha, coluna;
      do {
        linha = Math.floor(Math.random() * tamanho);
        coluna = Math.floor(Math.random() * tamanho);
      } while (this.tabuleiro[linha][coluna] === 'Navio');
      
      this.tabuleiro[linha][coluna] = 'Navio';
    }
  }

  atirar(linha, coluna) {
    if (linha < 0 || linha >= this.tamanho || coluna < 0 || coluna >= this.tamanho) {
      return 'TIRO_INVALIDO';
    }

    if (this.tabuleiro[linha][coluna] === 'Navio') {
      this.tabuleiro[linha][coluna] = 'Acerto';
      this.naviosRestantes--;
      return this.naviosRestantes === 0 ? 'VITÓRIA' : 'ACERTOU';
    } else if (this.tabuleiro[linha][coluna] === 'Água') {
      this.tabuleiro[linha][coluna] = 'Erro';
      return 'ERROU';
    } else {
      return 'TIRO_REPETIDO';
    }
  }

  exibirTabuleiro(mostrarNavios = false) {
    for (let linha of this.tabuleiro) {
      let linhaExibicao = linha.map(celula => {
        if (celula === 'Navio' && !mostrarNavios) return 'Água';
        return celula;
      });
      console.log(linhaExibicao.join(' | '));
    }
  }
}

const jogoNaval = new BatalhaNaval();
jogoNaval.exibirTabuleiro(true);

/////////////////////////////////////////////////////////////////////////////