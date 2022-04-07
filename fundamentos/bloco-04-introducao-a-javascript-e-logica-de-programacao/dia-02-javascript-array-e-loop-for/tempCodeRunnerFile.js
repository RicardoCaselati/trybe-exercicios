let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1) Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// resposta: console.log(numbers);

// 2) Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

function somatoria () {
    let n = numbers.length;
    let resultado = []

    for (index = 0; index < n; index += 1) {
        let xablau = numbers[index];
        for (index = 0; index < xablau.length; index += 1) {
            let xablau2 = xablau[index];
            resultado = xablau + xablau2;
        }
    }
    return resultado
}
console.log(somatoria())