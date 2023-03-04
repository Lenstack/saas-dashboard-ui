import Link from "next/link";
import Avatar from "boring-avatars";
import {Navbar} from "@/components";
import {AUTH_ROUTES, HOME_ROUTES} from "@/constants";
import {Bars2Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "@/contexts";

export const HomeHeaderContainer = () => {
    const {user} = useContext(UserContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="py-8 flex justify-between items-center align-middle">
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
                <button onClick={toggleMenu}>
                    <Bars2Icon className="h-8 w-8"/>
                </button>
            </section>
            <section className={`${isMenuOpen ? "fixed z-50  top-0 left-0 w-full h-full bg-[#FAFAFA] dark:bg-[#161616]" : "hidden"}`}>
                <div className="px-6 py-14 flex flex-col items-center gap-16">
                    <button onClick={toggleMenu}>
                        <XMarkIcon className="h-8 w-8"/>
                    </button>
                    <Navbar items={AUTH_ROUTES} className="flex flex-col items-center gap-5"/>
                    <Navbar items={HOME_ROUTES} className="flex flex-col items-center gap-5"/>
                </div>
            </section>
        </header>
    )
}