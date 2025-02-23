import { CombustionEngine } from './combustion-engine';
export class DieselEngine extends CombustionEngine {
    public type: string;
    public adBlue: number;

    public constructor(capacity: number, power: number, torque: number, adBlue: number, type: string) {
        super(type, capacity, power, torque);
        this.adBlue = adBlue;
        this.type = type;
    }
    public consumeAdBlue(): string {
        for (let i = 0; i < 5; i++) {
            this.adBlue -= 0.1;
            console.log('AdBlue is being used for diesel engine for each Vroom Vroom');
        }
        return `AdBlue volume: ${this.adBlue.toFixed(2)} liters`;
    }
    public getType(): string {
        return `Type of fuel is ${this.type}`;
    }

}
