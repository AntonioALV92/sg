export class InfoUsuarioClass {
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    tipoCuenta: number;
    // tipoUsuarioDefault: number;
    nombreUsuario: string;
    urlImagen: string | null | undefined;
    // perfiles: Array<PerfilesUsuarioClass>;
    idBanco: number | null | undefined;
    tipoPersona: number | null | undefined;
    clabe: string | null | undefined;
    correoElectronico: string;
    telefono: string;
    rfc: string | null | undefined;
    nacionalidad: number | null | undefined;
}

class PerfilesUsuarioClass {
    idPerfil: number;
    descripcion: string;
    estatus: number;
}