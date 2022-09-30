const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const idade = species.find((specie) => specie.name === animal).residents;
  const comparaIdade = idade.every((elemento) => elemento.age >= age);
  return comparaIdade;
}

getAnimalsOlderThan('lions', 7);
module.exports = getAnimalsOlderThan;
