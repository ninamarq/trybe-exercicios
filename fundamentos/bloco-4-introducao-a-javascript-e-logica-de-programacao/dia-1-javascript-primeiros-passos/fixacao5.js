let nota = 90
let status

if (nota >= 80){
    console.log("Parabéns");
}

else if (nota < 80 && nota >= 60) {
    console.log("Voce está na nossa lista de espera");
}

else if (nota < 60) {
    console.log("Voce foi reprovada(o)")
}

switch (status) {
    case 80:
        console.log("Aprovada!");
        break;
    
    case 79:
        console.log("Lista Espera");
        break;
    
    case 0:
        console.log("Reprovadx");
        break;
}