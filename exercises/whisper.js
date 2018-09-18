'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
function whisper(string){
	let res=string.toLowerCase();
	return(res)
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.deepStrictEqual(whisper('BONJOUR'), 'bonjour')
assert.deepStrictEqual(whisper('CA.VA'), 'ca.va')
assert.deepStrictEqual(whisper('QUELLE VIE'), 'quelle vie')
// End of tests */
