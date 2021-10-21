/**
 * @callback add
 * @param {number} i
 * @param {string} j
 * @returns {number}
 */

/**
 * @type {add}
 */
const myAdd = (i, j) => i + parseFloat(j);

/**
 * @param {number} attenuation
 * @returns {function(number, number): number}
 */
const createAdder = attenuation => {
  return (i, j) => attenuation * (i + j);
};

export { }