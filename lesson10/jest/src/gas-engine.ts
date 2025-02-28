import { CombustionEngine } from './combustion-engine';
export class GasEngine extends CombustionEngine {
    public type: string;
    public oilConsumption: number;

    public constructor(capacity: number, power: number, torque: number, oilConsumption: number, type: string) {
        super(type, capacity, power, torque);
        this.oilConsumption = oilConsumption;
        this.type = type;
    }
    public consumeOil(): string {
        for (let i = 0; i < 5; i++) {
            this.oilConsumption -= 0.1;
            console.log('oil is being consumed for gasoline engine for each Vroom Vroom');
        }
        return `Oil volume: ${this.oilConsumption.toFixed(2)} liters`;
    }
    public getType(): string {
        return `Type of fuel is ${this.type}`;
    }

}
