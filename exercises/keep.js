'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

function keepFirst(string)  {
	let res=string.substr(0, 2);
	return(res);
}

function keepLast(string) {
	let res=string.substr( ((string.length)-2), 2);
	return(res);
}

function keepFirstLast(string) {
	let res=string.substr(2, 2);
	return(res);
}


//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirst.length, 1)
assert.strictEqual(keepLast.length, 1)
assert.strictEqual(keepFirstLast.length, 1)
assert.deepStrictEqual(keepFirst('quellevie'), 'qu')
assert.deepStrictEqual(keepLast('quellevie'), 'ie')
assert.deepStrictEqual(keepFirstLast('quellevie'), 'el')
// End of tests */
