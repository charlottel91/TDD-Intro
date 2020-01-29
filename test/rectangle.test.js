const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('rectangle', () => {
    it('false, it is not a square', () => {
        const rectangle1 = new Rectangle(10, 5);
        assert.strictEqual(rectangle1.isSquare(rectangle1), false)
    });
    it('true, it is a square', () => {
        const rectangle2 = new Rectangle(10, 10);
        assert.strictEqual(rectangle2.isSquare(rectangle2), true)
    });
    it('good area', () => {
        const rectangle3 = new Rectangle(10, 10);
        assert.strictEqual(rectangle3.getArea(rectangle3), 100)
    });
    it('good perimeter', () => {
        const rectangle4 = new Rectangle(10, 10);
        assert.strictEqual(rectangle4.getPerimeter(rectangle4), 40)
    });
})