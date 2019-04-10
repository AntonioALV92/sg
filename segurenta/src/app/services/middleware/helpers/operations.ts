import { HttpHeaders } from '@angular/common/http';

export const Operations = {
    setHeaders: (array: any) => {
        const header = new HttpHeaders();
        if (array) {
            for (const key of array) {
                header.set(key, array[key]);
            }
        }
        return header;
    },
};
