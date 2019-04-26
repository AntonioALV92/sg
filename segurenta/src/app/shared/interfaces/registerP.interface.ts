export interface DireccionInterface {
    alias: string;
    calle: string;
    numeroInterior: number;
    numeroExterior: number;
    codigoPostal: number;
    delegacion: string;
    colonia: string;
    ciudad: string;
    pais: string;
    descripcion: string;
    estado: string;
    latitud: number;
    longitud: number;
}
export class DireccionClass implements DireccionInterface {
    alias: string;
    calle: string;
    numeroInterior: number;
    numeroExterior: number;
    codigoPostal: number;
    delegacion: string;
    colonia: string;
    ciudad: string;
    pais: string;
    descripcion: string;
    estado: string;
    latitud: number;
    longitud: number;

    
}

export interface PropiedadInterface {
    tipoPropiedad: number;
    rentaMensual: number;
    precioVenta: number;
    mantenimiento: number;
}
export class PropiedadClass implements PropiedadInterface {
    tipoPropiedad: number;
    rentaMensual: number;
    precioVenta: number;
    mantenimiento: number;
}