import { expect } from 'chai';
import { ElectricEngine } from 'src/electric-engine';
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
