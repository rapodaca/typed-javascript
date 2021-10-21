/**
 * @template T
 * @typedef {object} Range
 * @property {T} start
 * @property {T} end
 */

const alphabet = {
  start: 13,
  end: 42
};

/**
 * @param {Range<number>} first
 * @param {Range<number>} second
 * @returns {number}
 */
const distance = (first, second) => first.end - second.start;

/**
 * @typedef {object} Comparable
 * @property {function(Comparable): number} compare
 */

/**
 * @template {Comparable} T
 * @param {Range<T>} first
 * @param {Range<T>} second 
 * @returns {number}
 */
const distance2 = (first, second) => {
  if (first.start.compare(second.start) > 0) {
    // first precedes second
  } else {
    // second precedes first
  }

  throw new Error('not implemented');
};

export { }