export class EstructuraResponse<T> {
    error: Error | null | undefined;
    result: T | null | undefined;
}

class Error {
    mensaje: string;
}