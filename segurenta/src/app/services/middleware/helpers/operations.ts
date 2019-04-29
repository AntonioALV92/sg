import { HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

export class Operations {
    private ref: ChangeDetectorRef;
    constructor() {
    }

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

    // private setHeaders(headers?: HttpHeaders): HttpHeaders {
    //     if (!headers) {
    //       headers = new HttpHeaders();
    //     }
    //     headers.delete('authorization');
    //     const token: any = atob(sessionStorage.jwtoken);
    //     if (token) {
    //       headers.append('Authorization', 'Bearer ' + token);
    //     }
    //     return headers;
    //   }
}
