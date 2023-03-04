import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { IUserProvider, IUserContext, IUser } from "@/interfaces";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProvider) => {
    const STORAGE_KEY = useMemo(() => "user", []);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({} as IUser);

    const signIn = useCallback(({ accessToken, refreshToken, expiresIn }: IUser) => {
        setUser({ accessToken, refreshToken, expiresIn });
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                isAuthenticated: true,
                user: { accessToken, refreshToken, expiresIn }
            })
        );
        setIsAuthenticated(true);
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem(STORAGE_KEY);
        setIsAuthenticated(false);
        setUser({} as IUser);
    }, []);

    const checkAuthentication = useCallback(() => {
        const storedUser = localStorage.getItem(STORAGE_KEY);
        if (storedUser) {
            const { isAuthenticated: storedIsAuthenticated, user: storedUserObj } = JSON.parse(storedUser);
            setIsAuthenticated(storedIsAuthenticated);
            setUser(storedUserObj);
        }
    }, []);

    useEffect(() => {
        checkAuthentication();
    }, [checkAuthentication]);

    useEffect(() => {
        const handleStorage = () => {
            checkAuthentication();
        };
        window.addEventListener("storage", handleStorage);
        return () => {
            window.removeEventListener("storage", handleStorage);
        };
    }, [checkAuthentication]);

    const value = useMemo(() => ({ signIn, signOut, isAuthenticated, user }), [
        signIn,
        signOut,
        isAuthenticated,
        user
    ]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
