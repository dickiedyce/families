const faker = require('faker');

function individual(options) {
  const {
    surname,
    gender,
    depth: oldDepth,
  } = {
    gender: faker.random.arrayElement(['Female', 'Male']),
    depth: 1,
    surname: faker.name.lastName(),
    ...options,
  };
  const depth = oldDepth - 1;
  console.log(surname, gender, depth);
  const parents = {};
  if (depth > 0) {
    parents.father = individual({
      depth,
      gender: 'Male',
      surname,
    });
    parents.mother = individual({ depth, gender: 'Female' });
  }

  return {
    forename: faker.name.firstName(gender),
    surname,
    gender,
    depth,
    ...parents,
  };
}

module.exports = {
  individual,
};
