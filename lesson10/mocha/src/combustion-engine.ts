import { IEngine } from './iengine';

export class CombustionEngine implements IEngine {
    //public type: string;
    public power: number;
    public torque: number;
    public capacity: number;
    private emission: 'Euro 6';


    public constructor(type: string, capacity: number, power: number, torque: number) {
        //this.type = type;
        this.capacity = capacity;
        this.power = power;
        this.torque = torque;
        this.emission = 'Euro 6';
    }

    public getCapacity(): string {
        return `${this.capacity} cc`;
    }
    public getEmission(): string {
        return this.emission;
    }

    public getPower(): string {
        return `${this.power} hp and ${this.torque} Nm`;
    }

    public start(): void {
        console.log('Combustion engine started');
        for (let i = 0; i < 5; i++) {
            console.log('Vroom Vroom');
        }
    }

    public stop(): void {
        console.log('Combustion engine stopped');
    }
    public reachTopRevs(revs: number): void {
        console.log(`Reaching top revs of ${revs}`);
    }
}
