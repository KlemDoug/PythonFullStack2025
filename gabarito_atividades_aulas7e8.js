// 1. Cálculo de Média de Notas:
// Peça ao usuário que insira 4 notas (de 0 a 10). Calcule a média das notas e exiba o resultado.
// Se a média for maior ou igual a 7, exiba "Aprovado". Caso contrário, exiba "Reprovado".

function calcularMedia() {
    let soma = 0;
    for (let i = 0; i < 4; i++) {
        let nota = parseFloat(prompt(`Digite a ${i + 1}ª nota:`));
        soma += nota;
    }
    let media = soma / 4;
    console.log("Média:", media);
    if (media >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

// Chamada da função
calcularMedia();

// 2. Soma dos Números Pares em um Intervalo:
// Peça ao usuário dois números, representando o início e o fim de um intervalo.
// Use um loop (for ou while) para calcular a soma de todos os números pares nesse intervalo e exiba o resultado.

function somaParesNoIntervalo() {
    let inicio = parseInt(prompt("Digite o início do intervalo:"));
    let fim = parseInt(prompt("Digite o fim do intervalo:"));
    let soma = 0;
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }
    console.log("Soma dos números pares:", soma);
}

// Chamada da função
somaParesNoIntervalo();

// 3. Verificação de Palíndromo:
// Peça ao usuário uma palavra ou frase. Verifique se a entrada é um palíndromo (ou seja, se pode ser lida da mesma forma de trás para frente,
// ignorando espaços e maiúsculas/minúsculas). Exiba "É palíndromo" ou "Não é palíndromo".

function verificarPalindromo() {
    let texto = prompt("Digite uma palavra ou frase:").toLowerCase().replace(/ /g, "");
    let textoInvertido = texto.split("").reverse().join("");
    if (texto === textoInvertido) {
        console.log("É palíndromo");
    } else {
        console.log("Não é palíndromo");
    }
}

// Chamada da função
verificarPalindromo();

// 4. Cálculo de Juros Simples:
// Peça ao usuário o valor principal (P), a taxa de juros anual (r) e o tempo em anos (t).
// Calcule o montante final usando a fórmula de juros simples M = P × (1 + r × t) e exiba o resultado.

function calcularJurosSimples() {
    let P = parseFloat(prompt("Digite o valor principal (P):"));
    let r = parseFloat(prompt("Digite a taxa de juros anual (r):")) / 100;
    let t = parseFloat(prompt("Digite o tempo em anos (t):"));
    let M = P * (1 + r * t);
    console.log("Montante final:", M);
}

// Chamada da função
calcularJurosSimples();

// 5. Contagem de Dígitos:
// Peça ao usuário um número inteiro positivo. Conte quantos dígitos esse número possui e exiba o resultado.

function contarDigitos() {
    let numero = prompt("Digite um número inteiro positivo:");
    if (/^\d+$/.test(numero)) {
        console.log("Número de dígitos:", numero.length);
    } else {
        console.log("Entrada inválida. Digite um número inteiro positivo.");
    }
}

// Chamada da função
contarDigitos();

// 

