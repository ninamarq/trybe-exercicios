// Faça uma lista com as suas frutas favoritas
const specialFruit = ['dsa', 'dsa', 'dsa'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['dsa', 'ggfgf', 'gf'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));