const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//peguei no: https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
numArray = oddsAndEvens.sort((a, b) => a - b);
string = numArray.toString();

console.log(`Os números: '${string}' estao em ordem crescente`); // será necessário alterar essa linha 😉