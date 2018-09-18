'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(string) {
	let res=string.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())
	return(res)
}



//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('comment vas tu'), 'Comment Vas Tu')
assert.strictEqual(jadenCase('coMMEnt VAs tU'), 'Comment Vas Tu')
// End of tests */
