import { User } from './interface-json';
import { getJson } from './interface-json';

abstract class AbstractUser {
    public user: User;
    public constructor(user: User) {
        this.user = user;
    }
    public abstract getSummary(): string;
}

class DetailedUser extends AbstractUser {
    public user: User;

    public constructor(user: User) {
        super(user);
        this.user = user;
    }

    public getSummary(): string {
        return `Name: ${this.user.name}, City: ${this.user.address.city}, Company: ${this.user.company.name}`;
    }
}

async function main(): Promise<void> {
    const users: User[] = await getJson();
    users.forEach(user => {
        const detailedUser = new DetailedUser(user);
        console.log('Detailed User Summary:', detailedUser.getSummary());
    });
}

main();
