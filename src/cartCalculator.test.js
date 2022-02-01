const computeTotalPrice = require('./cartCalculator.js').computeTotalPrice;

describe('Cart Calculator Tests', function() {
    it('Has 1 Unique Item', function() {
        expect(computeTotalPrice(['A'])).toEqual(299);
    });
    
    it('Has 2 Of The Same Item', function() {
        expect(computeTotalPrice(['A','A'])).toEqual(598);
    });
    
    it('Has 3 Of The Same Item', function() {
        expect(computeTotalPrice(['A','A', 'A'])).toEqual(897);
    });

    it('Has A Set Of 2 Items', function() {
        expect(computeTotalPrice(['A', 'B'])).toEqual(568.10);
    });

    it('Has A Set Of 3 Items', function() {
        expect(computeTotalPrice(['A', 'B', 'C'])).toEqual(807.30);
    });

    it('Has A Set Of 4 Items', function() {
        expect(computeTotalPrice(['A', 'B', 'C', 'D'])).toEqual(956.80);
    });

    it('Has A Set Of 5 Items', function() {
        expect(computeTotalPrice(['A', 'B', 'C', 'D', 'E'])).toEqual(1121.25);
    });

    it('Has A Set Of 2 Items AND A Set Of 2 Items', function() {
        expect(computeTotalPrice(['A', 'A', 'B', 'B'])).toEqual(1136.20);
    });
    
    it('Has A Set Of 3 Items AND A Set Of 3 Items', function() {
        expect(computeTotalPrice(['A', 'A', 'B', 'B', 'C', 'C'])).toEqual(1614.60);
    });

    it('Has A Set Of 5 Items AND A Set Of 3 Items', function() {
        expect(computeTotalPrice(['A', 'A', 'B', 'B', 'C', 'C', 'D', 'E'])).toEqual(1928.55);
    });
    
    it('Has A Set Of 5 Items AND A Set Of 5 Items AND A Set Of 3 Items', function() {
        expect(computeTotalPrice(['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'E', 'E'])).toEqual(3049.80);
    });
});