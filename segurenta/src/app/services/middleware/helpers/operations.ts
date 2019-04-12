import { HttpHeaders } from '@angular/common/http';

export class Operations {

    constructor() {}

    public setHeaders(array: any) {
        const header = new HttpHeaders();
        if (sessionStorage.jwtoken) {
            if (array) {
                array = Object.assign(array, { Authorization: atob(sessionStorage.jwtoken) });
            } else {
                array = { Authorization: atob(sessionStorage.jwtoken) };
            }
        }
        if (array) {
            for (const key of Object.keys(array)) {
                header.set(key, array[key]);
            }
        }
        return header;
    }
}
