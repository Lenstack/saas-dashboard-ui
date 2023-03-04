import {useContext, useEffect} from "react";
import {UserContext} from "@/contexts";
import {useRouter} from "next/router";

export const PublicRoute = ({children}: any) => {
    const {isAuthenticated} = useContext(UserContext)
    const router = useRouter()

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/dashboard")
        }
    }, [isAuthenticated])

    return isAuthenticated && children
}