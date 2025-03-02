export interface IEngine {
    power: number;
    torque: number;

    start(): void;
    stop(): void;
    reachTopRevs(revs: number): string;
}
