const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeesCoverage(name) {
  let object = {};
  if (employees) {
    object = employees.filter((employee) => employee.firstName === name
    || employee.lastName === name)[0]
  }
  return object;
}

module.exports = getEmployeesCoverage;
