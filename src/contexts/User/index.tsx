import {createContext, useEffect, useMemo, useState} from "react";
import {IUserProvider, IUser} from "@/interfaces";

const initialUser = {} as IUser;
export const UserContext = createContext({
    user: initialUser,
    setUser: (user: IUser) => {
    }
})

export const UserProvider = ({children}: IUserProvider) => {
    const [user, setUser] = useState(initialUser)

    const isSignIn = () => {
        const sessionUser = localStorage.getItem('user')
        if (!sessionUser) {
            if (user.loggedIn) {
                setUser(initialUser)
            }
            console.log("No access token")
            return;
        }
        if (!user.loggedIn) {
            setUser({loggedIn: true})
        }
        console.log("Access token")
    }

    useEffect(() => {
        isSignIn()
    }, [])

    const contextValue = useMemo(() => ({user, setUser}), [user])

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}