import {ReactNode} from "react";

export interface IUserProvider {
    children: ReactNode
}

export interface IUser {
    accessToken: string,
    refreshToken: string,
    expiresIn: string,
}

export interface IUserContext {
    isAuthenticated: boolean;
    signIn: (user: IUser) => void;
    signOut: () => void;
    user: IUser;
}


