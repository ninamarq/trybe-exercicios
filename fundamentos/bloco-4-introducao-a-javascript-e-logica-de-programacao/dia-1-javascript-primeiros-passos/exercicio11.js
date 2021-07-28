let bruto = 7000;
let base;
let valorIR;

// alíquota
if (bruto <= 1556.94) {
    console.log(bruto - bruto*0.08);
} else if (1556.95 < bruto < 2594.92) {
    console.log(bruto - bruto*0.09);
} else if (2594.93 < bruto < 5189.82) {
    console.log(bruto - bruto*0.11);
} else if (bruto >= 5189.82) {
    console.log(bruto - 570.88);
}
 
// imposto renda
