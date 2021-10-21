/**
 * @typedef {object} Animal
 * @property {function(string): string} talk
 * @property {function(): string} walk
 */

/** @type Animal */
const duck = {
  talk: name => `Quack quack, ${name}`,
  walk: () => 'Waddle, waddle.'
};

export { }