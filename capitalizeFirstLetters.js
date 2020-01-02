const assert = require('assert');

// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('zazou'), 'Zazou');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');

  