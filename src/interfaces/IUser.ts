import {ReactNode} from "react";

export interface IUserProvider {
    children: ReactNode
}

export interface IUser {
    loggedIn: boolean
    user: IUserCredentials | null
}

export interface IUserCredentials {
    access_token: string
    refresh_token: string
    expires_in: number
}