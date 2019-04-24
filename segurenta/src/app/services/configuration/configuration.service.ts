import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {

  constructor() { }

  public endpoints = {
    // Servicios Sesión
    login: '/sesion/login',
    logout: '/sesion/logout',

    // Servicios Catálogos
    catBanco: '/catalogos/banco/',
    catBancos: '/catalogos/bancos',
    catCategoria: '/catalogos/categoria/',
    catCategorias: '/catalogos/categorias',
    catEstatus: '/catalogos/estatus',
    catModulo: '/catalogos/modulo',
    catModulos: '/catalogos/modulos',
    catNacionalidad: '/catalogos/nacionalidad',
    catNacionalidades: '/catalogos/nacionalidades',
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

    // Servicio Banner
    banner: '/banner',

    // Servicios Registro
    crearUsuario: '/usuario/crear',

    // Servicio Info
    infoUsuario: '/usuario/info',

    // Servicios Info Usuario
    infoBasicUser: '/usuario/infoBasica',

    // Servicio Recuperar Contraseña
    recoveryPass: '/password/recuperar'
  };
}
