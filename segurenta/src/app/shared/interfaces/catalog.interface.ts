import { Injectable } from '@angular/core';

export interface CatalogInterface {
  id?: number;
  value: string;
}

export type CatalogItems = Array<CatalogInterface>;

export class TypeProperty implements CatalogInterface {
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
