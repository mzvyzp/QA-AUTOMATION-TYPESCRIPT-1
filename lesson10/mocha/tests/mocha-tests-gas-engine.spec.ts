import { expect } from 'chai';
import { GasEngine } from 'src/gas-engine';

describe('Gasoline engine', () => {
    let gasEngine: GasEngine;

    beforeEach(() => {
        gasEngine = new GasEngine(2000, 220, 350, 4.5, 'Gasoline');
    });

    it('engine characteristics should be correct', () => {
        expect(gasEngine.capacity).to.equal(2000);
        expect(gasEngine.power).to.equal(220);
        expect(gasEngine.torque).to.equal(350);
        expect(gasEngine.type).to.equal('Gasoline');
    });

    it('should consume oil correctly', () => {
        const result = gasEngine.consumeOil();
        expect(result).to.equal('Oil volume: 4.00 liters');
    });

    it('correct type of fuel for gas engine', () => {
        const result = gasEngine.getType();
        expect(result).to.equal('Type of fuel is Gasoline');
    });
});
