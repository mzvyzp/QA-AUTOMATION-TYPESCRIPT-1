import { Animal } from './animals';

export class Dog extends Animal {
    public breed: string;

    public constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }

    public getInfo(): string {
        return `${super.getInfo()}, Breed: ${this.breed}`;
    }
}
