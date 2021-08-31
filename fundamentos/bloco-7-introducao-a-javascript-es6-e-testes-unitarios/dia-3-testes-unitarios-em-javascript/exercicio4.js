const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(9), 'fizz', myFizzBuzz);
// assert.strictEqual(myFizzBuzz(8), 'fizzbuzz', myFizzBuzz);
assert.strictEqual(myFizzBuzz(10), 'buzz', myFizzBuzz);
assert.strictEqual(myFizzBuzz('the man in the high castle'), 'fizz', myFizzBuzz);