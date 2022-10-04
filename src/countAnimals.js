const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const obj = {};
  if (animal === undefined) {
    species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }
  const totalAnimais = species.find((spc) => spc.name === animal.specie).residents;
  if (Object.keys(animal).includes('sex')) {
    const especificioAnimais = totalAnimais.filter((e) => e.sex === animal.sex);
    return especificioAnimais.length;
  }
  return totalAnimais.length;
}

console.log(countAnimals());

module.exports = countAnimals;
