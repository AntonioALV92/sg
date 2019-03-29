import { HttpHeaders } from '@angular/common/http';

export const Operations = {
    setHeaders: (array) => {
        let header = new HttpHeaders();
        for (var key in array) {
            header.set(key,array[key]);
        };
        return header;
    },
}