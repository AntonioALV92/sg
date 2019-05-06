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
    catTipoPersona: '/catalogos/tipoPersona',
    catTipoPersonas: '/catalogos/tipoPersonas',
    catTipoPropiedad: '/catalogos/tipoPropiedad',
    catTipoPropiedades: '/catalogos/tipoPropiedades',
    catTipoReferencia: '/catalogos/tipoReferencia',
    catTipoReferencias: '/catalogos/tipoReferencias',
    catTipoRelacion: '/catalogos/tipoRelacion',
    catTipoRelaciones: '/catalogos/tipoRelaciones',
    catTipoUsuario: '/catalogos/tipoUsuario',
    catTipoUsuarios: '/catalogos/tipoUsuario',

    // Servicio Banner
    banner: '/banner',

    // Servicios Registro Usuario
    crearUsuario: '/usuario/crear',

    // Servicio Info
    infoUsuario: '/usuario/info',

    // Servicios Info Usuario
    infoBasicUser: '/usuario/infoBasica',

    // Servicios Calendandario
    citasBroker: '/citas/broker',
    citasBroker2: '/citas/broker2',
    solicitaCita: '/citas/inquilino',
    disponibilidadBroker: '/disponibilidad/broker',
    // Servicios Editar Usuario
    editarUsuario: '/usuario/editar',
    // Servicio Propiedad
    sendDireccion: '/propiedad/direccionPropiedad',
    sendPropiedad: '/propiedad/generales',
    sendCaracteristicas: '/propiedad/caracteristicas',
    // Servicio Recuperar Contraseña
    recoveryPass: '/password/recuperar'
  };
}
