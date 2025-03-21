/////////////////////////////////////////////////////
//   Lista de Atividades em JavaScript - Aula 5    //
/////////////////////////////////////////////////////

// 1. Cálculo de Desconto em uma Loja:
// Declare duas variáveis, preco e desconto, com valores 150.0 e 20, respectivamente.
// Calcule o preço final após aplicar o desconto e imprima o resultado.

// Resolução:
let preco = 150.0;
let desconto = 20;
let precoFinal = preco - (preco * desconto / 100);
console.log("Preço final após desconto:", precoFinal);


// 2. Cálculo de IMC (Índice de Massa Corporal):
// Declare duas variáveis, peso e altura, com valores 70 e 1.75, respectivamente.
// Calcule o IMC usando a fórmula: IMC = peso / (altura ** 2). Imprima o resultado.

// Resolução:
let peso = 70;
let altura = 1.75;
let imc = peso / (altura ** 2);
console.log("Seu IMC é:", imc);


// 3. Verificação de Elegibilidade para um Concurso:
// Declare duas variáveis, idade e temExperiencia, com valores 22 e true, respectivamente.
// Verifique se a pessoa é elegível para o concurso (idade maior ou igual a 18 e tem experiência) e imprima o resultado.

// Resolução:
let idade = 22;
let temExperiencia = true;
let elegivel = idade >= 18 && temExperiencia;
console.log("Elegível para o concurso?", elegivel);


// 4. Classificação de Níveis de Acesso:
// Declare uma variável nivelAcesso com um valor entre 1 e 3.
// Use estruturas condicionais para imprimir:

// "Acesso total" se o nível for 3.
// "Acesso parcial" se o nível for 2.
// "Acesso restrito" se o nível for 1.

// Resolução:
let nivelAcesso = 2;
if (nivelAcesso === 3) {
    console.log("Acesso total");
} else if (nivelAcesso === 2) {
    console.log("Acesso parcial");
} else {
    console.log("Acesso restrito");
}


// 5. Conversão de Temperatura:
// Declare uma variável celsius com um valor de temperatura em graus Celsius.
// Converta a temperatura para Fahrenheit usando a fórmula: F = (C * 9/5) + 32.
// Imprima o resultado.

//Resolução:
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log("Temperatura em Fahrenheit:", fahrenheit);


// 6. Verificação de Números Pares e Ímpares:
// Declare uma variável numero com um valor inteiro.
// Use estruturas condicionais para verificar se o número é par ou ímpar e imprima o resultado.

// Resolução:
let numero = 7;
if (numero % 2 === 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}


// 7. Cálculo de Frete com Base no Peso:
// Declare uma variável peso com o peso de um pacote em kg. Calcule o frete com base nas seguintes regras:

// Peso até 5 kg: R$ 10.00
// Peso entre 5 kg e 10 kg: R$ 20.00
// Peso acima de 10 kg: R$ 30.00

// Imprima o valor do frete.

// Resolução:
let peso2 = 8;
let frete;
if (peso2 <= 5) {
    frete = 10.0;
} else if (peso2 <= 10) {
    frete = 20.0;
} else {
    frete = 30.0;
}
console.log("Valor do frete:", frete);

/////////////////////////////////////////////////////
//                fim do código                    //
/////////////////////////////////////////////////////