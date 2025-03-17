const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        return "Obesidade grau 1";
    } else if (imc >= 35 && imc < 39.9) {
        return "Obesidade grau 2";
    } else {
        return "Obesidade grau 3";
    }
}

rl.question("Digite o seu peso (em kg): ", (peso) => {
    rl.question("Digite a sua altura (em metros): ", (altura) => {
 
        peso = parseFloat(peso);
        altura = parseFloat(altura);


        let resultado = calcularIMC(peso, altura);
        console.log("Classificação do IMC:", resultado);

        rl.close();
    });
});