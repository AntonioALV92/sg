export class EstructuraResponse<T> {
    error: ErrorClass | null | undefined;
    result: T | null | undefined;
}

class ErrorClass {
    mensaje: string;
}