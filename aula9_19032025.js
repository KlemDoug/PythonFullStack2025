/////////////////////////////////////////////////////
//   VETORES/ARRAYS em JavaScript - Aula 9         //
/////////////////////////////////////////////////////

// Arrays em JavaScript são estruturas de dados que permitem armazenar MÚLTIPLOS VALORES em uma única variável.

// Exemplo:
let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas);

// Funções/comandos de Array:

// push: Adiciona um ou mais elementos ao final do array.

frutas.push("Laranja");
console.log(frutas);

// count: Em JavaScript, não temos uma função count diretamente, mas podemos utilizar o comando length para contar o número de elementos.

console.log(frutas.length);

// copy: Para copiar um array, podemos usar o método slice().

let copiaFrutas = frutas.slice(); 
console.log(copiaFrutas);

// random: Para selecionar um elemento aleatório de um array.

let randomIndex = Math.floor(Math.random() * frutas.length);
console.log(frutas[randomIndex]);

// range: JavaScript não tem uma função range nativa, mas podemos criar uma.

function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

console.log(range(1, 5));

// asort: Em JavaScript, podemos usar sort() para ordenar arrays.

let num = [3, 1, 4, 1, 5, 9];
num.sort((a, b) => a - b);
console.log(num);

// Demonstração:
let numeros = [5, 3, 8, 1, 9];

// Ordenar o array
numeros.sort((a, b) => a - b);
console.log("Ordenado:", numeros);

// Adicionar um novo número
numeros.push(7);
console.log("Após push:", numeros);

// Selecionar um número aleatório
let randomNum = numeros[Math.floor(Math.random() * numeros.length)];
console.log("Número aleatório:", randomNum);

// Contar o número de elementos
console.log("Número de elementos:", numeros.length);


// Atividades:

// 1: Crie uma função que recebe um array de números e retorna a soma de todos os elementos.

function somaArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

let numeros1 = [1, 2, 3, 4, 5];
console.log("Soma do array:", somaArray(numeros1));


// 2: Crie uma função que recebe um array de strings e retorna um novo array com as strings em ordem alfabética.

function ordenarStrings(arr) {
    return arr.sort();
}

let frutas2 = ["Banana", "Maçã", "Laranja", "Abacaxi"];
console.log("Frutas ordenadas:", ordenarStrings(frutas2));


// 3: Crie uma função que recebe um array e retorna um novo array sem elementos duplicados.

function removerDuplicados(arr) {
    return [...new Set(arr)];
}

let numeros3 = [1, 2, 2, 3, 4, 4, 5];
console.log("Sem duplicados:", removerDuplicados(numeros3));

// solução para atividade 3 usando Set e também uma solução usando Filter:

function removerDuplicados(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

let numeros4 = [1, 2, 2, 3, 4, 4, 5];
console.log("Sem duplicados:", removerDuplicados(numeros4)); 

//  
