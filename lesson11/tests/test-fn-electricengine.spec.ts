import { ElectricEngine } from '../src/electric-engine';
import { reachTopRevs } from '../src/index';
import { jest, expect } from '@jest/globals';

describe('ElectricEngine test', () => {
    let electricEngine: ElectricEngine;

    beforeEach(() => {
        electricEngine = new ElectricEngine('Electric', 350, 800, 1000);
        electricEngine.start = jest.fn();
        electricEngine.reachTopRevs = jest.fn();
        electricEngine.stop = jest.fn();
    });

    it('start the electric engine verification', () => {
        electricEngine.start();
        expect(electricEngine.start).toHaveBeenCalled();
    });

    it('call reachTopRevs with 7000', () => {
        reachTopRevs(electricEngine);
        expect(electricEngine.reachTopRevs).toHaveBeenCalledWith(7000);
    });

    it('stop the electric engine verification', () => {
        electricEngine.stop();
        expect(electricEngine.stop).toHaveBeenCalled();
    });
});
