// let numbers = [6, 8, 2, 12, 70, 8, 100, 2, 32, 22];

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

// let maiorNumber = 0;

// for (let index = 0; index < numbers.length; index ++) {
//     let number = numbers[index];
//     if (number > maiorNumber) {
//         maiorNumber = number;
//         }
// }
// console.log(maiorNumber);}

// let impar = 0;
// let par = 0;

// for (let index = 0; index < numbers.length; index ++) {
//     if (numbers[index] % 2 === 1) {
//         impar ++; } else if (numbers % 2 == 1){
//         impar = 0
//     }
// } console.log("Há ",impar, "neste array"); }

// let menorNumber = numbers[0];
// for (let index = 0; index < numbers.length; index ++) {
//         if (numbers[index]<menorNumber) {
//             numbers[index] = menorNumber;
//             }
//     }
//     console.log(menorNumber);

let array = [];

for (let index = 0; index < 25 ; index++ ) {
    array[index] = index+1;
}
console.log(array);

let newa = [];
for (numero of array) {
    newa.push(numero/2);
} console.log(newa);
