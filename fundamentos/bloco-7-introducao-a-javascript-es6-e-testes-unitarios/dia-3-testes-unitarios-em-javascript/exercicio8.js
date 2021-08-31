const assert = require('assert');
// escreva a função sumAllNumbers aqui
sumAllNumbers = (array) => {
    let deposit = 0;
    for (let i = 0; i < array.length; i ++) {
        deposit = deposit + array[i];
    }
    return deposit;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);