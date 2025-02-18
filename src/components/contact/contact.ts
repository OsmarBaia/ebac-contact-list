export default class Contact {
    name: string;
    number: number;
    email: string;

    constructor(name: string, email: string, number: number) {
        this.name = name;
        this.email = email;
        this.number = number;
    }
}
