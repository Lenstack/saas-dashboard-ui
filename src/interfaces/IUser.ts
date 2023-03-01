import {ReactNode} from "react";

export interface IUserProvider {
    children: ReactNode
}

export interface IUser {
    loggedIn: boolean
}