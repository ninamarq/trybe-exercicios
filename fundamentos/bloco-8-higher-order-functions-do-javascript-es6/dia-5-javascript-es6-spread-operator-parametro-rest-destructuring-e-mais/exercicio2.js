const assert = require('assert');

// escreva sum abaixo
const sum = (...numbers) => {
    if (numbers === undefined) {
        return 0;
    } else {
    numbers.reduce((accumulator, number) => {
        if (number === undefined) {
        return accumulator + number;
        }
    })
}};

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);
