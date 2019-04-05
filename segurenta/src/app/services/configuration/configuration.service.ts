import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {

  constructor() { }

  public endpoints = {
    // Servicios Sesión
    login: '/sesion/login',
    logout: '/sesion/logout',

    // Catálogos
    catBanco: '/catalogos/banco/',
    catBancos: '/catalogos/bancos',
    catCategoria: '/catalogos/categoria/',
    catCategorias: '/catalogos/categorias',
    catEstatus: '/catalogos/estatus',
    catModulo: '/catalogos/modulo',
    catModulos: '/catalogos/modulos',
    catNacionelidad: '/catalogos/nacionalidad',
    catNacionelidades: '/catalogos/nacionalidades',
    catPeriocidad: '/catalogos/periocidad',
    catPeriodicidades : '/catalogos/periodicidades',
    catRegimen: '/catalogos/regimen',
    catRegimenes: '/catalogos/regimenes',
    catSucursal: '/catalogos/sucursal',
    catSucursales: '/catalogos/sucursales',
    catTipoArrendador: '/catalogos/tipoarrendador',
    catTipoArrendadores: '/catalogos/tipoarrendadores',
    catTipoArrendatario: '/catalogos/tipoarrendatario',
    catTipoArrendatarios: '/catalogos/tipoarrendatarios',
    catTipoAval: '/catalogos/tipoaval',
    catTipoAvales: '/catalogos/tipoavales',
    catTipoCaracteristica: '/catalogos/tipocaracteristica',
    catTipoCaracteristicas: '/catalogos/tipocaracteristicas',
    catTipoDato: '/catalogos/tipodato',
    catTipoDatos: '/catalogos/tipodatos',
    catTipoImagen: '/catalogos/tipoimagen',
    catTipoImagenes: '/catalogos/tipoimagenes',
    catTipoMultimedia: '/catalogos/tipomultimedia',
    catTipoMultimedias: '/catalogos/tipomultimedias',
    catAvalesSolidario: '/catalogos/tiposavalessolidario',
    catAvalesSolidarios: '/catalogos/tiposavalessolidarios',
    catTipoPersona: '/catalogos/tipopersona',
    catTipoPersonas: '/catalogos/tipopersonas',
    catTipoPropiedad: '/catalogos/tipopropiedad',
    catTipoPropiedades: '/catalogos/tipopropiedades',
    catTipoReferencia: '/catalogos/tiporeferencia',
    catTipoReferencias: '/catalogos/tiporeferencias',
    catTipoRelacion: '/catalogos/tiporelacion',
    catTipoRelaciones: '/catalogos/tiporelaciones',
    catTipoUsuario: '/catalogos/tipousuario',
    catTipoUsuarios: '/catalogos/tipousuario',
  };
}
