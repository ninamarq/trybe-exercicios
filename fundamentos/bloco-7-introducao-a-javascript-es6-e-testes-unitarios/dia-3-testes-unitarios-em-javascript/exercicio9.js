const assert = require('assert');
// escreva a função findTheNeedle aqui
findTheNeedle = (array, str) => {
    let result = 0;
    for (let i = 0; i < array.length; i ++) {
        if (array[i] === str) {
            return i;
        }
    }
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = -1;
// output = findTheNeedle(words, 'plat');
// assert.strictEqual(output, expected);