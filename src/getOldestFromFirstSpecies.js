const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

function getOldestFromFirstSpecies(id) {
  const encarregado = employees.find((employee) => employee.id === id);
  const primeiroAnimal = encarregado.responsibleFor[0];
  const especieEspecifica = species.find((specie) => primeiroAnimal.includes(specie.id));
  const objetoAnimais = especieEspecifica.residents;
  let idade = 0;
  let maisVelho;
  objetoAnimais.forEach((resident) => {
    if (idade < resident.age) {
      idade = resident.age;
      maisVelho = resident;
    }
  });
  const acheiMisseravel = Object.values(maisVelho);
  return acheiMisseravel;
}

console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

module.exports = getOldestFromFirstSpecies;
