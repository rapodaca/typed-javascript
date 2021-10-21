/**
 * @typedef {object} Foo
 * @property {string} value
 * 
 * @param {number} value
 * @param {Foo} foo
 * @returns {number}
 */
const add = (value, foo) => {
  return value + parseFloat(foo.value);
};