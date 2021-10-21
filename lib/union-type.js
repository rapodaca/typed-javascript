/**
 * @typedef {object} Foo
 * @property {string} name
 *
 * @typedef {object} Bar
 * @typedef {number} age
 *
 * @typedef {Foo & Bar} FooBar
 */

const foobar = { name: 'John', age: 42 };

/** 
 * @param {Foo} foo 
 * @returns {string}
 */
const checkFoo = (foo) => foo.name;

/** 
 * @param {Bar} bar 
 * @returns {string}
 */
const checkBar = (bar) => bar.name;

checkFoo(foobar);
checkBar(foobar);

export { }