export interface PersonInterface {
    id?: number;
    names: string;
    firstLastName: string;
    secondLastName: string;
    phoneNumber: number;
    email: string;
    password: string;
    nationality?: number;
    bankName?: number;
    clabe?: number;
}

export class PersonClass implements PersonInterface {
    id?: number;
    names: string;
    firstLastName: string;
    secondLastName: string;
    phoneNumber: number;
    email: string;
    password: string;
    nationality?: number;
    bankName?: number;
    clabe?: number;
}
