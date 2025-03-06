import { IEngine } from './iengine';

export class ElectricEngine implements IEngine {
    public type: string;
    public power: number;
    public torque: number;
    public batteryCapacity: number;


    public constructor(type: string, batteryCapacity: number, power: number, torque: number) {
        this.type = type;
        this.batteryCapacity = batteryCapacity;
        this.power = power;
        this.torque = torque;
    }

    public getCapacity(): string {
        return `${this.batteryCapacity} kWh`;
    }

    public getPower(): string {
        return `${this.power} hp and ${this.torque} Nm`;
    }

    public start(): void {
        console.log('Electric engine started');
        for (let i = 0; i < 5; i++) {
            console.log('Vroom Vroom');
        }
    }

    public stop(): void {
        console.log('Electric engine stopped');
    }
    public reachTopRevs(revs: number): string {
        return `Reaching top revs of ${revs}, but battery is running out`;
    }
}
