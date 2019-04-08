export interface LoginInterface {
    menssage: string;
    code: number;
    result: {
        tipousuarioDefault: number;
        apellidoPaterno: string;
        apellidoMaterno: string;
        nombre: string;
        imagen: string;
        cuentas: [
            {
                id: number,
                descripcion: string
            }
        ];
        id: number;
        token: string;
    };
}
