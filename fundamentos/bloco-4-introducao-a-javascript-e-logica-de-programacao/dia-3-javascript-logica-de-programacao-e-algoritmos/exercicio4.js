let num = 10;

// comparando a base, a linha acima sempre será -2 (-1 por lado).
// j == num
// i == (n+1)/2
for ( i = 0; i <= Math.ceil(num/2); i++){
    let linha = "";
    for(j = 0; j <= num; j++){
        if(j >= (num-(i-1)) && j <= (num+(i-1))){
            linha = linha + "*";
        } else{
            linha = linha + " ";
        }
    }console.log(linha);
}