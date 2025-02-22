import { Animal } from './animals';

export class Cat extends Animal {
    public color: string;
    public static defaultCat = new Cat('Street cat', 4, 'Gray');

    public constructor(name: string, age: number, color: string) {
        super(name, age);
        this.color = color;
    }

    public getInfo(): string {
        return `${super.getInfo()}, Color: ${this.color}`;
    }
}
