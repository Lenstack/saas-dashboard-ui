import Link from "next/link";
import Avatar from "boring-avatars";
import {Navbar} from "@/components";
import {AUTH_ROUTES, HOME_ROUTES} from "@/constants";
import {Bars2Icon} from "@heroicons/react/24/outline";
import {useContext} from "react";
import {UserContext} from "@/contexts";

export const HomeHeaderContainer = () => {
    const {user} = useContext(UserContext)
    return (
        <header className="flex justify-between items-center align-middle">
            <Link href="/"><Avatar size={32} name="Avatar" variant="sunset"
                                   colors={["#000000", "#31323E", "#7EEAEC", "#C0C0C0"]}/></Link>
            <section className="hidden lg:flex lg:gap-32">
                <Navbar items={HOME_ROUTES} className="space-x-5"/>
                {
                    user.loggedIn ? (
                        <Link href="/dashboard" className="space-x-5">Dashboard</Link>
                    ) : (
                        <Navbar items={AUTH_ROUTES} className="space-x-5"/>
                    )
                }
            </section>
            <section className="flex lg:hidden gap-5">
                <button>
                    <Bars2Icon className="h-8 w-8"/>
                </button>
            </section>
        </header>
    )
}