import { Injectable } from '@angular/core';

export class ItemCatalog {
  id: number;
  value: string;
}

export class ItemCatalog2 {
  id: number;
  descripcion: string;
}

export type CatalogItems = Array<ItemCatalog>;
export type CatalogItems2 = Array<ItemCatalog2>;

export class TypeProperty implements ItemCatalog {
  constructor(
    public id: number,
    public value: string,
    public selected: boolean = false
  ) {}
}

@Injectable()
export class Globals {
  public isLogged: boolean = false;
}
