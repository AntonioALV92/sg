export interface PersonInterface {
    nombres: string;
    paterno: string;
    materno: string;
    telefono: number;
    email: string;
    password: string;
    cuenta: number;
    banco?: number;
    clabe?: number;
}
export class PersonClass implements PersonInterface {
    nombres: string;
    paterno: string;
    materno: string;
    telefono: number;
    email: string;
    password: string;
    cuenta: number;
    banco?: number;
    clabe?: number;
}

export interface InquilinoInterface {
    nombres: string;
    paterno: string;
    materno: string;
    email: string;
    password: string;
    cuenta: number;
}
export class InquilinoClass implements InquilinoInterface {
    nombres: string;
    paterno: string;
    materno: string;
    email: string;
    password: string;
    cuenta: number;

    constructor(person: PersonClass) {
        this.nombres =  person.nombres;
        this.paterno = person.paterno;
        this.materno = person.materno;
        this.email = person.email;
        this.password = person.password;
        this.cuenta = person.cuenta;
    }
}

export interface UsuarioInterface {
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    nombreUsuario?: string | null | undefined;
    correoElectronico: string | null | undefined;
    telefono?: string | null | undefined;
    imagenPerfil?: string | null | undefined;
    nacionalidad?: number | null | undefined;
    rfc?: string | null | undefined;
}

export class UsuarioClass implements UsuarioInterface {
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    correoElectronico: string | null | undefined;
    telefono?: string | null | undefined;
    imagenPerfil?: string | null | undefined;
    nacionalidad?: number | null | undefined;
    rfc?: string | null | undefined;
    idBanco?: number | null | undefined;
    clabe?: string | null | undefined;
}

export class EditarUsuarioClass<T> {

}