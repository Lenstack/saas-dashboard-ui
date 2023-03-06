import {createContext, useCallback, useState} from "react";
import {IUser, IUserContext, IUserProvider} from "@/interfaces";
import {RefreshTokenService, SignInService, SignOutService} from "@/services";
import {parseJwt} from "@/utils";
import {useRouter} from "next/router";

const ACCESS_TOKEN_MAX_AGE_SECONDS = 55 * 5; // 4 minutes and 55 seconds
export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({children}: IUserProvider) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({} as IUser);
    const router = useRouter();

    const handleSignIn = useCallback(async (email: string, password: string) => {
        try {
            const response = await SignInService(email, password);
            if (!response.ok) {
                return response.statusText;
            }
            const {access_token} = await response.json();
            const {id} = parseJwt(access_token);

            setIsAuthenticated(true);
            setUser({id});
            await router.push("/dashboard");

            setInterval(async () => {
                await renewAccessToken();
            }, ACCESS_TOKEN_MAX_AGE_SECONDS * 1000);
        } catch (error) {
            console.error(error);
            return error;
        }
    }, [router])

    const handleSignOut = useCallback(async () => {
        try {
            await SignOutService();
            setIsAuthenticated(false);
            setUser({} as IUser);
            await router.push("/");
        } catch (error) {
            console.error(error);
            return error;
        }
    }, [router])

    const renewAccessToken = useCallback(async () => {
        try {
            const response = await RefreshTokenService();
            if (!response.ok) {
                return response.statusText;
            }
            const {access_token} = await response.json();
            const {id} = parseJwt(access_token);

            setIsAuthenticated(true);
            setUser({id});
        } catch (error) {
            console.error(error);
            return error;
        }
    }, [])

    return (
        <UserContext.Provider value={{isAuthenticated, user, handleSignIn, handleSignOut}}>
            {children}
        </UserContext.Provider>
    )
}
