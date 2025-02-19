export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export async function getJson(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json() as User[];
    return json;
}

(async () => {
    const users = await getJson();
    console.log('user name:', users[2].name);
    console.log('company name:', users[2].company.name);
})();
