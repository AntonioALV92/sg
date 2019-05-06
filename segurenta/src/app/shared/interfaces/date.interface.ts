export interface DateInterface {
    titulo: string;
    descripcion: string;
    inicio: string;
    fin: string;
    nivel: string;
    // paterno: string;
    // materno: string;
    // telefono: number;
    // email: string;
    // password: string;
    // cuenta: number;
    // banco?: number;
    // clabe?: number;
}
export class DateClass implements DateInterface {
    titulo: string;
    descripcion: string;
    inicio: string;
    fin: string;
    nivel: string;
    // paterno: string;
    // materno: string;
    // telefono: number;
    // email: string;
    // password: string;
    // cuenta: number;
    // banco?: number;
    // clabe?: number;
}

// export interface InquilinoInterface {
//     nombres: string;
//     paterno: string;
//     materno: string;
//     email: string;
//     password: string;
//     cuenta: number;
// }
// export class InquilinoClass implements InquilinoInterface {
//     nombres: string;
//     paterno: string;
//     materno: string;
//     email: string;
//     password: string;
//     cuenta: number;

//     constructor(person: PersonClass) {
//         this.nombres =  person.nombres;
//         this.paterno = person.paterno;
//         this.materno = person.materno;
//         this.email = person.email;
//         this.password = person.password;
//         this.cuenta = person.cuenta;
//     }
// }
