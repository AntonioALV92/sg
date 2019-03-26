import { extend } from 'webdriver-js-extender';
import { Injectable } from '@angular/core';

export interface CatalogInterface {
    id?: number;
    value: string;
}

export type CatalogItems = Array<CatalogInterface>;

export class TypeProperty implements CatalogInterface {
    constructor(public id: number, public value: string, public selected: boolean = false) { }
}

@Injectable()
export class Globals {
  isLogged: boolean = false;
}

// @Injectable({
//     providedIn: 'root'
// })
// export class TypePropertyAdapter implements AdapterInterface<TypeProperty> {

//   adapt(item: any): TypeProperty {
//     return new TypeProperty( item.id, item.value);
//   }
// }
