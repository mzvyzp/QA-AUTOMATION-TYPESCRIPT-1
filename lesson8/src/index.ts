import { DetailedUser } from './abstraction';
import { User, getJson } from './interface-json';
import { UserSummary } from './extended-json-class';
import { Animal } from './animals';
import { Dog } from './dogs-class';
import { Cat } from './cats-class';

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

async function main(): Promise<void> {
    const users: User[] = await getJson();
    users.forEach(user => {
        const detailedUser = new DetailedUser(user);
        console.log('import from abstraction:');
        console.log('Detailed User Summary:', detailedUser.getSummary());
    });
}

main();

(async () => {
    const users = await getJson();
    const userSummary = new UserSummary(users[2]);
    console.log('import from extended-json-class:');
    console.log('User Summary:', userSummary);
})();

(async () => {
    const users = await getJson();
    console.log('import from interface-json:');
    console.log('user name:', users[2].name);
    console.log('company name:', users[2].company.name);
})();
