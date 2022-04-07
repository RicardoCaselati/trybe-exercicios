// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
const a = 6;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const a = 1;
const b = 5;

if (a > b) {
    console.log(a + "é maior")
} else if (b > a) {
    console.log(b + "é maior");
} else {
    console.log(" são iguais")
}

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const a = 1;
const b = 10;
const c = 6;

if (a > b && a > c) {
    console.log(a + " é maior");
} else if (b > a && b > c) {
    console.log(b + " é maior");
} else if (c > a && c > b) {
    console.log(c + " é maior");
} else {
    console.log("são iguais");
}

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const valor = -5;

if (valor < 0) {
    console.log("negative");
} else if (valor == 0) {
    console.log("zero");
} else {
    console.log("positive")
}

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const angulo1 = 90;
const angulo2 = 45;
const angulo3 = 45;
const angulo4 = 0;

if (angulo1 + angulo2 + angulo3 + angulo4 == 180) {
    console.log("é um triângulo");

} else if (angulo1 + angulo2 + angulo3 + angulo4 == 360) {
    console.log("é um retângulo");

} else if (angulo1 + angulo2 + angulo3 + angulo4 < 0) {
    console.log("inválido")

} else {
    console.log("erro")
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let input = "Rainha";

// Função extraída do site -> https://www.delftstack.com/pt/howto/javascript/javascript-to-lowercase/
function lower(input) {
    return String(input).toLowerCase();
}

if (lower(input) == "peão") {
    console.log("No primeiro movimento do peão, ele pode andar tanto 1 como 2 casas para frente, dependendo da sua estratégia de abertura. Depois disso, entretanto, o peão só pode se mover 1 casa para frente a cada rodada e nunca pode se mover para trás.")
} else if (lower(input) == "cavalo") {
    console.log("O cavalo também é único na forma de se mover. Enquanto outras peças se movem em linha reta ou na diagonal, ele se mexe em formato de L. Ele pode se mover tanto duas casas para frente e uma para a direita ou para a esquerda, quanto uma casa para a esquerda ou para a direita e duas para frente.")
} else if (lower(input) == "bispo") {
    console.log("Na questão do movimento, os bispos se movem apenas na diagonal, mas também podem ir de um canto a outro do tabuleiro, dentro da sua respectiva cor.")
} else if (lower(input) == "torre") {
    console.log("O movimento dessa peça é ao longo de linhas retas – se houver espaço suficiente, ela pode ir de um lado a outro do tabuleiro em um único movimento.")
} else if (lower(input) == "rainha") {
    console.log("Ela combina o poder da diagonal dos bispos e a linha reta da torre.")
} else if (lower(input) == "rei") {
    console.log("Restrito a se mover uma casa por turno.")
} else {
    console.log("peça não encontrada")
}

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
const porcentagem = 20;

if (porcentagem >= 90 && porcentagem <= 100) {
    console.log("A");
} else if (porcentagem >= 80 && porcentagem < 90) {
    console.log("B");
} else if (porcentagem >= 70 && porcentagem < 80) {
    console.log("C");
} else if (porcentagem >= 60 && porcentagem < 70) {
    console.log("D");
} else if (porcentagem >= 50 && porcentagem < 60) {
    console.log("E");
} else if (porcentagem < 50 && porcentagem >= 0) {
    console.log("F");
} else {
    console.log("Opa, tem coisa errada.");
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

// esta função de sorteiro de números é uma mistura de dois artigos https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random e https://www.javascriptprogressivo.net/2018/12/Como-Gerar-Numeros-Aleatorios-JS-random-Funcao.html

// function getRandom() {
//     let resultado=[];


//     const numeros = Math.floor(10 * Math.random());
//     resultado.push(numeros);

//     return resultado
// }
// console.log(getRandom())

const a = 1;
const b = 3;
const c = 5;

let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
    isEven = true;
};
console.log(isEven);

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
const a = 1;
const b = 3;
const c = 5;

let isOdd = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
    isOdd = true;
};
console.log(isOdd);

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
const custoProd = 1;
const imposto = 0.8; //20%
const custo = custoProd / imposto;
const margemLucro = 0.7; //30%
const valorVenda = custo / margemLucro;
let numVendas = 1000;
let lucro = (valorVenda - custo) * numVendas;


if (custoProd >= 0 && valorVenda >= 0) {
    console.log(lucro);
} else {
    console.log("Error, os valores não podem ser negativos");
}

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
const salario = 3000
const inss = salario*0.11;
const ir = (salario-inss)*0.075-142.8;
let salarioBruto = salario-inss-ir;

console.log(salarioBruto)


//Gabarito
let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));
