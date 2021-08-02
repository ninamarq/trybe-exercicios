let num = 5;

// 1a coluna 
//     * 0 i
//    ** 1
//   *** 2 
//  **** 3
// ***** 4
// j01234
// espaço = num - (i+1)
// * = (i+1)
// se o j for menor do que o espaço, 
for (let i = 0; i < num; i++){
    let linha = "";
    let espaco = num - ( i + 1 );
    for (j = 0; j < num; j++){
        if ( j < espaco) {
            linha = linha + " ";
        } else {
            linha = linha + "*";
        }
    }
    console.log(linha);
}