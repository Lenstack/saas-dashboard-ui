import {createContext, useState} from "react";
import {IUser, IUserContext, IUserProvider} from "@/interfaces";
import {RefreshTokenService, SignInService} from "@/services";
import {parseJwt} from "@/utils";
import {setCookie, getCookie, removeCookies} from 'cookies-next';

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({children}: IUserProvider) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({} as IUser)

    const handleSignIn = async (email: string, password: string) => {
        try {
            const {access_token, refresh_token, expires_in} = await SignInService(email, password)
            const {id} = parseJwt(access_token)
            // 60 seconds * 6 minutes * 24 hours = 1 day
            // 60 seconds * 5 minutes = 5 minutes
            setCookie("access_token", access_token, {maxAge: 60 * 5, httpOnly: false, sameSite: "strict"})
            setCookie("refresh_token", refresh_token, {maxAge: 60 * 6 * 24, httpOnly: false, sameSite: "strict"})

            setIsAuthenticated(true);
            setUser({id})

            // setInterval to renew access token before it expires (5 minutes) if user is still logged in (refresh_token exists)
            setInterval(() => {
                renewAccessToken()
            }, 60 * 5 * 1000)

        } catch (error) {
            console.error(error)
        }
    }

    const handleSignOut = async () => {
        try {
            removeCookies("access_token")
            removeCookies("refresh_token")
            setIsAuthenticated(false)
            setUser({} as IUser)
        } catch (error) {
            console.error(error)
        }
    }

    const renewAccessToken = async () => {
        try {
            const refresh_token = getCookie('refresh_token')
            if (!refresh_token) {
                await handleSignOut()
                return
            }

            if (typeof refresh_token === "string") {
                const {access_token, expires_in} = await RefreshTokenService(refresh_token)
                setCookie("access_token", access_token, {maxAge: 60 * 5, httpOnly: false, sameSite: "strict"})
                return
            }

            console.error("Invalid refresh token:", refresh_token);
            await handleSignOut();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <UserContext.Provider value={{isAuthenticated, user, handleSignIn, handleSignOut} as IUserContext}>
            {children}
        </UserContext.Provider>
    )
}