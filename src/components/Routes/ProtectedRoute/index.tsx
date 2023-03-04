import {useContext, useEffect} from "react";
import {UserContext} from "@/contexts";
import {useRouter} from "next/router";

export const ProtectedRoute = ({children}: any) => {
    const {isAuthenticated} = useContext(UserContext)
    const router = useRouter()

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/authentication/sign-in")
            return
        }
        console.log("isAuthenticated: " + isAuthenticated)
    }, [isAuthenticated])

    return isAuthenticated && children
}