import {createContext, useState} from "react";
import {IUserProvider, IUser} from "@/interfaces";

export const UserContext = createContext({
    user: {} as IUser,
    setUser: (user: IUser) => {
    }
})

export const UserProvider = ({children}: IUserProvider) => {
    const [user, setUser] = useState<IUser>({
        loggedIn: false,
    } as IUser)
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}