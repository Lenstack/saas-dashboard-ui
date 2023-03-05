import {ReactNode} from "react";

export interface IUserProvider {
    children: ReactNode
}

export interface IUser {
    id: string;
}

export interface IUserContext {
    isAuthenticated: boolean;
    handleSignIn: (email: string, password: string) => void;
    handleSignOut: () => void;
    user: IUser;
}


