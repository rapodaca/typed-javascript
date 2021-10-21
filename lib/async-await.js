/**
 * @typedef {object} Employee
 * @property {number} wage
 * 
 * @typedef {object} Database
 * @property {function(number): Employee} getEmployeeById
 * 
 * @param {number} id
 * @param {Database} db
 * @returns {Promise<number>}
 */
const wage = async (id, db) => {
  return await db.getEmployeeById(id).wage
};

export { }