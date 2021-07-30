// Para o primeiro exercício de hoje, faça um programa que,
//  dado um valor n qualquer, seja n > 1 ,
//  imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
//  n = 5

// *****
// *****
// *****
// *****
// *****


// receber valor de n
let nums = 2;
let i = 0;
// escrever um * para cada n, linha
for (let i = 0; i < nums; i += 1) {
    console.log("*".repeat(nums));
    if (i > nums){
        break;
    }
}