// acessei https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// para desenvolver o sorteio
const sorteio = () => {
  const min = Math.ceil(1);
  const max = Math.floor(5);
  const sortN = Math.floor(Math.random() * (max - min + 1)) + min;
  return sortN;  
}

const hof = (num, callback) => {
  if (num === callback) {
    return 'Você ganhou!!!!!';
  } else {
    return 'Tente novamente';
  }
  };

console.log(hof(2, sorteio));