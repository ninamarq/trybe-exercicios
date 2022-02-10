const readline = require('readline-sync');
const axios = require('axios');

const getPokemonById = async (id) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ id }`);
    return data.name;
}

const askingUser = async () => {
  const name = readline.question('Ola! Vamos caçar pokemon? Primeiro, qual seu nome aventureiro? ');
  const id = readline.question('Fale um número de 1 a 100. ');

  console.log(`Olá, ${name}! O seu primeiro pokemon é x ${ await getPokemonById(id) }!`);
}

askingUser()
