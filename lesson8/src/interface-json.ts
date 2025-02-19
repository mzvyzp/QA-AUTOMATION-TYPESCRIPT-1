export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}
async function getJson(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
}
(async () => {
    const users = await getJson();
    console.log(users);
}
)();
