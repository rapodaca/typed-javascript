/**
 * @typedef {object} Person
 * @property {number} experience (in years)
 * 
 * @param {Readonly<Array<Person>>} people
 */
const cumulativeExperience = people => {
  people.pop(); // ERROR: Property 'pop' does not exist on type 'readonly Person[]'.ts(2339)

  return people.reduce((total, person) => total + person.experience, 0);
};

export { }