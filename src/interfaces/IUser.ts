import {ReactNode} from "react";

export interface IUserContext {
    user: IUser | null
    setUser: (user: IUser | null) => void
}

export interface IUserProvider {
    children: ReactNode
}

export interface IUser {
    id: number
    token: string
}