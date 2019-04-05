export interface LoginInterface {
    menssage: string;
    code: number;
    result: {
        materno: string,
        paterno: string,
        persona: {
            tipousuarioDefault: string,
            cuenta: {
                tipousuario: string,
                estatus: string
            },
            imagen: string,
            banco: string,
            tipopersona: string,
            clabe: string,
        },
        caduca: string,
        usuario: string,
        id: number,
        nombre: string,
        email: string,
        rfc: string,
        token: string
    };
}
