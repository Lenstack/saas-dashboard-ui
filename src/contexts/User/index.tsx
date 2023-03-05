import {createContext, useState} from "react";
import {IUser, IUserContext, IUserProvider} from "@/interfaces";
import {RefreshTokenService, SignInService} from "@/services";
import {parseJwt} from "@/utils";
import {setCookie, getCookie, removeCookies} from 'cookies-next';
import {useRouter} from "next/router";

const ACCESS_TOKEN_MAX_AGE_SECONDS = 60 * 5;
const REFRESH_TOKEN_MAX_AGE_SECONDS = 60 * 6 * 24;
export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({children}: IUserProvider) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({} as IUser)
    const router = useRouter()

    const handleSignIn = async (email: string, password: string) => {
        try {
            const {access_token, refresh_token} = await SignInService(email, password)
            const {id} = parseJwt(access_token)

            setCookie("access_token", access_token, {
                maxAge: ACCESS_TOKEN_MAX_AGE_SECONDS,
                httpOnly: false,
                sameSite: "strict"
            })
            setCookie("refresh_token", refresh_token, {
                maxAge: REFRESH_TOKEN_MAX_AGE_SECONDS,
                httpOnly: false,
                sameSite: "strict"
            })

            setIsAuthenticated(true)
            setUser({id})
            await router.push("/dashboard")

            setInterval(() => {
                renewAccessToken()
            }, ACCESS_TOKEN_MAX_AGE_SECONDS * 1000)
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
            await router.push("/authentication/sign-in")
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
                const {access_token} = await RefreshTokenService(refresh_token)
                const {id} = parseJwt(access_token)
                setCookie("access_token", access_token, {
                    maxAge: ACCESS_TOKEN_MAX_AGE_SECONDS,
                    httpOnly: false,
                    sameSite: "strict"
                })
                setIsAuthenticated(true)
                setUser({id})
                return
            }

            await handleSignOut();
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    return (
        <UserContext.Provider value={{isAuthenticated, user, handleSignIn, handleSignOut}}>
            {children}
        </UserContext.Provider>
    )
}