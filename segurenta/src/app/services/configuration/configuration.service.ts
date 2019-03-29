import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {

  constructor() { }

  public endpoints = {
    // Servicios Sesión
    'login': '/session/login',
    'logout': '/session/logout',

    // Catálogos
    'getBanco': '/catalogos/banco/',
    'getBancos': '/catalogos/bancos',
    'getCategoria': '/catalogos/categoria/',
    'getCategorias': '/catalogos/categorias'
  };
}
