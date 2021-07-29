let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// console.log(numbers);

// let soma = numbers[0] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];
// console.log(soma);

// let soma = numbers[0] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];
// let media = soma / 10;
// console.log(media);

// if (media > 20) {
//     console.log("Valor Maior que 20");
// } else {
//     console.log("Valor menor ou igual a 20");
// }

let maiorNumber = 0;

for (let index = 0; index < numbers.length; index ++) {
    let number = numbers[index];
    if (number > maiorNumber) {
        maiorNumber = number;
        }
}
console.log(maiorNumber);