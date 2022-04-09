

// // 1) Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// resposta: console.log(numbers);

// // 2) Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     resultado += numbers[index];
// }

// console.log(resultado)

// // Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;
// let xablau = numbers.length;

// for (let index = 0; index < numbers.length; index += 1) {
//     resultado += numbers[index];
// }

// let media = resultado / xablau;

// console.log(media)

// // Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;
// let xablau = numbers.length;

// for (let index = 0; index < numbers.length; index += 1) {
//     resultado += numbers[index];
// }

// let media = resultado / xablau;

// if (media > 20) {
//     console.log("valor maior que 20")
// } else {
//     console.log("valor menor ou igual a 20")
// }

// // Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorNumero = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers[index] > maiorNumero) {
//         maiorNumero = numbers[index];
//     }
// }

// console.log(maiorNumero)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let lista = [];


// for (let index = 0; index < numbers.length; index += 1) {
//     lista = numbers[index];
//     let impar = lista % 2;

//     if (impar !== 0) {
//         console.log(numbers[index] + " é um numero ímpar");
//     } else if (impar == 0) {
//         console.log(numbers[index] + " é par");
//     } else {
//         console.log(numbers[index]+ " nenhum valor encontrado");
//     }
// }

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numeroMenor = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers[index]  < numeroMenor) {
//         numeroMenor = numbers[index];
//     }
// }

// console.log(numeroMenor)

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let numero = 25;

for (let index = 1; index < numero; index += 1) {
    if(index%2){

    }
}

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .