/***********************************************
 * 1. SOMA DE MATRIZES
 ***********************************************/
function somaMatrizes(matriz1, matriz2) {
  // Verifica se as matrizes têm o mesmo tamanho
  if (matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
    throw new Error("As matrizes devem ter as mesmas dimensões");
  }

  let resultado = [];
  for (let i = 0; i < matriz1.length; i++) {
    resultado[i] = [];
    for (let j = 0; j < matriz1[i].length; j++) {
      resultado[i][j] = matriz1[i][j] + matriz2[i][j];
    }
  }
  return resultado;
}

/***********************************************
 * 2. TRANSPOSIÇÃO DE MATRIZ
 ***********************************************/
function transporMatriz(matriz) {
  let transposta = [];
  for (let j = 0; j < matriz[0].length; j++) {
    transposta[j] = [];
    for (let i = 0; i < matriz.length; i++) {
      transposta[j][i] = matriz[i][j];
    }
  }
  return transposta;
}

/***********************************************
 * 3. MULTIPLICAÇÃO DE MATRIZES
 ***********************************************/
function multiplicarMatrizes(matriz1, matriz2) {
  // Verifica se o número de colunas da matriz1 é igual ao número de linhas da matriz2
  if (matriz1[0].length !== matriz2.length) {
    throw new Error("Número de colunas da primeira matriz deve ser igual ao número de linhas da segunda");
  }

  let resultado = [];
  for (let i = 0; i < matriz1.length; i++) {
    resultado[i] = [];
    for (let j = 0; j < matriz2[0].length; j++) {
      let soma = 0;
      for (let k = 0; k < matriz1[0].length; k++) {
        soma += matriz1[i][k] * matriz2[k][j];
      }
      resultado[i][j] = soma;
    }
  }
  return resultado;
}

/***********************************************
 * 4. JOGO DA VELHA
 ***********************************************/
class JogoDaVelha {
  constructor() {
    this.tabuleiro = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    this.jogadorAtual = 'X';
  }

  exibirTabuleiro() {
    console.log(this.tabuleiro[0].join(' | '));
    console.log('---------');
    console.log(this.tabuleiro[1].join(' | '));
    console.log('---------');
    console.log(this.tabuleiro[2].join(' | '));
  }

  verificarVencedor() {
    const jogador = this.jogadorAtual;
    
    // Verifica linhas e colunas
    for (let i = 0; i < 3; i++) {
      if (
        (this.tabuleiro[i][0] === jogador && this.tabuleiro[i][1] === jogador && this.tabuleiro[i][2] === jogador) ||
        (this.tabuleiro[0][i] === jogador && this.tabuleiro[1][i] === jogador && this.tabuleiro[2][i] === jogador)
      ) {
        return true;
      }
    }
    
    // Verifica diagonais
    if (
      (this.tabuleiro[0][0] === jogador && this.tabuleiro[1][1] === jogador && this.tabuleiro[2][2] === jogador) ||
      (this.tabuleiro[0][2] === jogador && this.tabuleiro[1][1] === jogador && this.tabuleiro[2][0] === jogador)
    ) {
      return true;
    }
    
    return false;
  }

  jogar(linha, coluna) {
    if (linha < 0 || linha > 2 || coluna < 0 || coluna > 2) {
      return false;
    }

    if (this.tabuleiro[linha][coluna] === ' ') {
      this.tabuleiro[linha][coluna] = this.jogadorAtual;
      
      if (this.verificarVencedor()) {
        return 'VITÓRIA';
      }
      
      this.jogadorAtual = this.jogadorAtual === 'X' ? 'O' : 'X';
      return true;
    }
    
    return false;
  }

  verificarEmpate() {
    for (let linha of this.tabuleiro) {
      if (linha.includes(' ')) {
        return false;
      }
    }
    return true;
  }
}

/***********************************************
 * 5. BUSCA EM MATRIZ
 ***********************************************/
function buscarNaMatriz(matriz, numero) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === numero) {
        return { linha: i, coluna: j };
      }
    }
  }
  return null;
}

/***********************************************
 * 6. MATRIZ IDENTIDADE
 ***********************************************/
function gerarMatrizIdentidade(n) {
  let matriz = [];
  for (let i = 0; i < n; i++) {
    matriz[i] = [];
    for (let j = 0; j < n; j++) {
      matriz[i][j] = i === j ? 1 : 0;
    }
  }
  return matriz;
}

/***********************************************
 * 7. ROTAÇÃO DE MATRIZ
 ***********************************************/
function rotacionarMatriz(matriz) {
  let n = matriz.length;
  let rotacionada = [];
  for (let j = 0; j < n; j++) {
    rotacionada[j] = [];
    for (let i = n - 1; i >= 0; i--) {
      rotacionada[j][n - 1 - i] = matriz[i][j];
    }
  }
  return rotacionada;
}

/***********************************************
 * 8. SOMA DAS BORDAS
 ***********************************************/
function somaBordas(matriz) {
  let soma = 0;
  let n = matriz.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
        soma += matriz[i][j];
      }
    }
  }
  return soma;
}

/***********************************************
 * TERMINAL
 ***********************************************/
// 1. Soma de Matrizes
const matriz1 = [[1, 2], [3, 4]];
const matriz2 = [[5, 6], [7, 8]];
console.log("Soma de Matrizes:", somaMatrizes(matriz1, matriz2));

// 2. Transposição de Matriz
const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("Matriz Transposta:", transporMatriz(matriz));

// 3. Multiplicação de Matrizes
console.log("Multiplicação de Matrizes:", multiplicarMatrizes(matriz1, matriz2));

// 4. Jogo da Velha
const jogo = new JogoDaVelha();
jogo.jogar(0, 0); // X
jogo.jogar(1, 1); // O
jogo.jogar(0, 1); // X
jogo.jogar(1, 2); // O
jogo.jogar(0, 2); // X (vitória)
jogo.exibirTabuleiro();

// 5. Busca em Matriz
console.log("Busca na Matriz (5):", buscarNaMatriz(matriz, 5));

// 6. Matriz Identidade
console.log("Matriz Identidade 3x3:", gerarMatrizIdentidade(3));

// 7. Rotação de Matriz
console.log("Matriz Rotacionada 90°:", rotacionarMatriz(matriz));

// 8. Soma das Bordas
console.log("Soma das Bordas:", somaBordas(matriz));