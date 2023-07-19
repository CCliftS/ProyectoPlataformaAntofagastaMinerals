export interface LoginResponse {
    token: string;
    user: UserLoginResponse;
}

export interface UserLoginResponse {
    correo: string;
    id:string;
    password: string;
}

export interface UserProfile{
    correo: string;
    password: string;
}