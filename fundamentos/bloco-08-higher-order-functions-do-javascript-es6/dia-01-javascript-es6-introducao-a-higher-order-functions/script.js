
// CALCULATOR (EXEMPLO AULA GRAVADA GUS);
// const sum = (num1, num2) => num1 + num2;
// const sub = (num1, num2) => num1 - num2;
// const multi = (num1, num2) => num1 * num2;
// const div = (num1, num2) => num1 / num2;

// const calculator = (func) => func(10, 5);

// console.log(calculator(sum));
// console.log(calculator(sub));
// console.log(calculator(multi));
// console.log(calculator(div));


//EXERCÍCIO "PARA FIXAR";
// Vamos praticar com os seguintes exercícios:
// 1 - Crie uma função que retorne a string 'Acordando!!';
// const wakeUp = (wake) => 'Acordando!!';

// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
// const takeACoffe = (coffe) => 'Bora tomar café!!';

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
// const takeABed = (bed) => 'Partiu dormir!!';

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
// const doingThings = (func) => func();
// console.log(doingThings(wakeUp));
// console.log(doingThings(takeACoffe));
// console.log(doingThings(takeABed));



//EXERCÍCIO "AGORA PRÁTICA"
// Agora a prática
// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
// const name = (completeName) => {
//   const name = completeName;
//   const array = name.split(' ');
//   const toLowerCaseFirst = array[0].toLowerCase();
//   const toLowerCaseLast = array[1].toLowerCase();
//   const employeeRegistration = {
//     nomeCompleto: completeName,
//     email: `${toLowerCaseFirst}_${toLowerCaseLast}${'@trybe.com.br'}`,
//   };
//   return employeeRegistration;
// };

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };
// console.log(newEmployees(name));



// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const sortNumber = () => {
  const sort = Math.floor((Math.random() * 5) + 1);
  return sort;
}

const betNumber = (func) => func(5);

const checkNumbers = (number) => {
  const sortNumber = sortNumber();
  const betNumber = number;
  if (betNumber !== sortNumber){
    return 'Tente novamente';
  }

  if (betNumber !== sortNumber){
    return 'Parabéns você ganhou';
  }
}

console.log(checkNumbers(5));