export class Animal {
    public name: string;
    public age: number;

    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
