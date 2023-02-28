import {createContext, useContext, useEffect} from "react";
import {IUserContext, IUserProvider} from "@/interfaces";

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({children}: IUserProvider) => {
    const {user, setUser} = useContext(UserContext)

    useEffect(() => {
        // Get userId from token cookie
        console.log('UserContext', user)
    }, [user])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}