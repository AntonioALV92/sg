export class InfoUsuarioClass {
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    tipoUsuarioDefault: number;
    nombreUsuario: string;
    urlImagen: string;
    perfiles: Array<PerfilesUsuarioClass>;
    idBanco: number | null | undefined;
    tipoPersona: number;
    clabe: string;
    correoElectronico: string;
    telefono: string;
    rfc: string | null;
    nacionalidad: number;
}

class PerfilesUsuarioClass {
    idPerfil: number;
    descripcion: string;
    estatus: number;
}