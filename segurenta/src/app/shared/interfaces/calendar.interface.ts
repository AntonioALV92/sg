export interface PropiedadInterface {
    calle: string;
    numero: number;
    cp: number;
    colonia: string;
    municipio: string;
    estado: string;
}

export interface CalendarInterface {
    id: number;
    nombreInquilino: string;
    urlImagen: string;
    fechaInicio: string;
    fechaFin: string;
    estatus: number;
    direccionPropiedad: PropiedadInterface;
}
export class CalendarClass implements CalendarInterface {
    id: number;
    nombreInquilino: string;
    urlImagen: string;
    fechaInicio: string;
    fechaFin: string;
    estatus: number;
    direccionPropiedad: PropiedadInterface;
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
