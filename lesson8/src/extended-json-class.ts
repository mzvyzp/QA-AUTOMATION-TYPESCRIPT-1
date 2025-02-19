import { getJson } from './interface-json';
import { User } from './interface-json';

class UserSummary {
    private id: number;
    public name: string;
    public city: string;
    public companyName: string;

    public constructor(user: User) {
        this.id = user.id;
        this.name = user.name;
        this.city = user.address.city;
        this.companyName = user.company.name;
    }
}

(async () => {
    const users = await getJson();
    const userSummary = new UserSummary(users[2]);
    console.log('User Summary:', userSummary);
})();
