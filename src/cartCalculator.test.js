const getCartTotal = require('./cartCalculator.js').getCartTotal;

describe('Cart Calculator Tests', function() {
    it('Has 4 Unique Items', function() {
        expect(getCartTotal([])).toEqual('Dummy Return Value');
    });
});