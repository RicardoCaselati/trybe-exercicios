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