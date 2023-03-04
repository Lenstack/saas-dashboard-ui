import {IProtectedGuard} from "@/interfaces"
import {UserContext} from "@/contexts"
import {useContext, useEffect} from "react"
import {useRouter} from "next/router"

export const ProtectedGuard = ({children}: IProtectedGuard) => {
    const {user} = useContext(UserContext)
    const router = useRouter()

    const redirectIfNotAuthenticated = () => {
        if (!user.loggedIn) {
            router.push('/authentication/sign-in').then((response) => {
                console.log(response)
            })
        }
    }

    useEffect(redirectIfNotAuthenticated, [redirectIfNotAuthenticated])
    return user ? <>{children}</> : null;
}