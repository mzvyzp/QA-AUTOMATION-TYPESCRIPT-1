class Animal {
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

class Dog extends Animal {
    public breed: string;

    public constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }

    public getInfo(): string {
        return `${super.getInfo()}, Breed: ${this.breed}`;
    }
}

class Cat extends Animal {
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

const animal = new Animal('Fox', 5);
const dog = new Dog('Glory', 3, 'Rottweiler');
const cat = new Cat('MaineCoon', 12, 'Golden Brown');

console.log(animal.getInfo());
console.log(dog.getInfo());
console.log(cat.getInfo());
console.log(Cat.defaultCat.getInfo());


dog.age = 4;
console.log(`New age of dog: ${dog.age}`);

cat.age = 13;
console.log(`New age of cat: ${cat.age}`);
