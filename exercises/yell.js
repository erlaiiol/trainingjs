'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

function yell(string){
	let res=string.toUpperCase();
	return(res);
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.deepStrictEqual(yell('bonjour'), 'BONJOUR')
assert.deepStrictEqual(yell('ca va'), 'CA VA')
assert.deepStrictEqual(yell('je danse la zumba'), 'JE DANSE LA ZUMBA')

// End of tests */
