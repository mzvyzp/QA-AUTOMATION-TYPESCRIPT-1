
import { expect } from '@jest/globals';
import { ElectricEngine } from 'src/electric-engine';
describe('reachTopRevs', () => {

    it('should call reachTopRevs with 7000', () => {
        const ev = new ElectricEngine('Electric', 350, 800, 1000);
        expect(ev.reachTopRevs(7000)).toBe('Reaching top revs of 7000, but battery is running out');
    });
});
