//import { CombustionEngine } from './combustion-engine';
import { DieselEngine } from './diesel-engine';
import { GasEngine } from './gas-engine';
import { IEngine } from './iengine';
import { ElectricEngine } from './electric-engine';
export function reachTopRevs(engine: IEngine): void {
    engine.reachTopRevs(7000);
}
const dieselEngine =  new DieselEngine(2000, 150, 350, 17, 'Diesel');
dieselEngine.start();
console.log(dieselEngine.getPower());
console.log(dieselEngine.getCapacity());
console.log(dieselEngine.getEmission());
console.log(dieselEngine.consumeAdBlue());
console.log(dieselEngine.getType());
reachTopRevs(dieselEngine);
dieselEngine.stop();

const gasEngine = new GasEngine(2000, 220, 350, 4.5, 'Gasoline');
gasEngine.start();
console.log(gasEngine.getPower());
console.log(gasEngine.getCapacity());
console.log(gasEngine.getEmission());
console.log(gasEngine.consumeOil());
console.log(gasEngine.getType());
reachTopRevs(gasEngine);
gasEngine.stop();

const electricEngine = new ElectricEngine('Electric', 350, 800, 1000);
electricEngine.start();
console.log(electricEngine.getPower());
console.log(electricEngine.getCapacity());
reachTopRevs(electricEngine);
electricEngine.stop();

