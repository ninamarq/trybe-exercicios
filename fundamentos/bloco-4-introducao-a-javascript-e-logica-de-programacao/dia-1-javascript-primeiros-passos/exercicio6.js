let peça = 'Cavalo'.toLowerCase();

switch(peça) {
    case 'bispo':
        console.log("Diagonais");
        break;
    case 'rainha':
        console.log("Livre");
        break;
    case 'rei':
        console.log("Adjacentes, 1");
        break;
    case 'cavalo':
        console.log("Em L");
        break;
    case 'torre':
        console.log("horiz e vert, livre qntde");
        break;
    case 'peao':
        console.log("1 pra frente");
        break;
    default:
        console.log("Nao há essa peça");
}