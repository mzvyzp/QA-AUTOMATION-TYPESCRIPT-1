import { expect } from 'chai';
import { DieselEngine } from 'src/diesel-engine';
describe('DieselEngine', () => {
    let diesel: DieselEngine;

    beforeEach(() => {
        diesel = new DieselEngine(2000, 150, 350, 17, 'Diesel');
    });

    it('engine characteristics should be correct', () => {
        expect(diesel.capacity).to.equal(2000);
        expect(diesel.power).to.equal(150);
        expect(diesel.torque).to.equal(350);
        expect(diesel.adBlue).to.equal(17);
        expect(diesel.type).to.equal('Diesel');
    });

    it('Diesel engine should consume AdBlue correctly', () => {
        const result = diesel.consumeAdBlue();
        expect(result).to.equal('AdBlue volume: 16.50 liters');
        expect(diesel.adBlue.toFixed(2)).to.equal('16.50');
    });

    it('correct type of fuel for diesel engine', () => {
        const result = diesel.getType();
        expect(result).to.equal('Type of fuel is Diesel');
    });
});
