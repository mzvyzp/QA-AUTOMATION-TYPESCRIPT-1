import { DieselEngine } from '../src/diesel-engine';
import { GasEngine } from '../src/gas-engine';
import { ElectricEngine } from '../src/electric-engine';
import { reachTopRevs } from '../src/index';
import { jest, expect } from '@jest/globals';

describe('reachTopRevs function is working', () => {
    let dieselEngine: DieselEngine;
    let gasEngine: GasEngine;
    let electricEngine: ElectricEngine;

    beforeEach(() => {
        dieselEngine = new DieselEngine(2000, 150, 350, 17, 'Diesel');
        gasEngine = new GasEngine(2000, 220, 350, 4.5, 'Gasoline');
        electricEngine = new ElectricEngine('Electric', 350, 800, 1000);
    });

    it('should call reachTopRevs with 7000 on DieselEngine', () => {
        const spy = jest.spyOn(dieselEngine, 'reachTopRevs');
        reachTopRevs(dieselEngine);
        expect(spy).toHaveBeenCalledWith(7000);
    });

    it('should call reachTopRevs with 7000 on GasEngine', () => {
        const spy = jest.spyOn(gasEngine, 'reachTopRevs');
        reachTopRevs(gasEngine);
        expect(spy).toHaveBeenCalledWith(7000);
    });

    it('should call reachTopRevs with 7000 on ElectricEngine', () => {
        const spy = jest.spyOn(electricEngine, 'reachTopRevs');
        reachTopRevs(electricEngine);
        expect(spy).toHaveBeenCalledWith(7000);
    });
});
