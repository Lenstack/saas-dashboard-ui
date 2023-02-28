export interface IUserContext {
    user: IUser | null
    setUser: (user: IUser | null) => void
}

export interface IUser {
    id: number
    token: string
}