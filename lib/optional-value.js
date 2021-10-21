/**
 * @param {string} first
 * @param {string} last
 * @param {string} middle
 */
const printName = (first, last, middle) => {
  return `${first} ${middle === null ? '' : middle} ${last}`;
};

// ERROR: Argument of type 'undefined' is not assignable to parameter of type 'string | null'.ts(2345)
printName('John', 'Public', undefined);

/**
 * @param {string} first
 * @param {string} last
 * @param {string|undefined} middle
 */
const printName2 = (first, last, middle) => {
  return `${first} ${middle === null ? '' : middle} ${last}`;
};

// No error.
printName2('John', 'Public', undefined);

export { }