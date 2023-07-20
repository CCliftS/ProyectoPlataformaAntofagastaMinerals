export declare class User {
    correo: string;
    password: string;
    admin: boolean;
    validatePassword(password: string): boolean;
    getInfoToken(): {
        correo: string;
    };
}
