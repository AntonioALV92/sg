import { extend } from 'webdriver-js-extender';

export interface CatalogInterface {
    id?: number;
    value: string;
}

export type CatalogItems = Array<CatalogInterface>;

export class TypeProperty implements CatalogInterface {
    constructor(public id: number, public value: string, public selected: boolean = false) { }
}
