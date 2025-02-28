import { expect } from 'chai';
import { DieselEngine } from 'src/diesel-engine';
import { GasEngine } from 'src/gas-engine';
import { ElectricEngine } from 'src/electric-engine';


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
describe('ElectricEngine', () => {
    let electric: ElectricEngine;

    beforeEach(() => {
        electric = new ElectricEngine('Electric', 85, 300, 400);
    });

    it('engine characteristics should be correct', () => {
        expect(electric.type).to.equal('Electric');
        expect(electric.batteryCapacity).to.equal(85);
        expect(electric.power).to.equal(300);
        expect(electric.torque).to.equal(400);
    });

    it('should return correct battery capacity', () => {
        const result = electric.getCapacity();
        expect(result).to.equal('85 kWh');
    });

    it('should return correct power and torque', () => {
        const result = electric.getPower();
        expect(result).to.equal('300 hp and 400 Nm');
    });
});
