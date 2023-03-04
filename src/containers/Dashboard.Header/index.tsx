import {Breadcrumb, Navbar} from "@/components";
import Link from "next/link";
import Avatar from "boring-avatars";
import {DASHBOARD_ROUTES} from "@/constants";
import {useContext} from "react";
import {UserContext} from "@/contexts";

export const DashboardHeaderContainer = () => {
    const {setUser} = useContext(UserContext)
    return (
        <header className="p-10 flex flex-col gap-5 border-b dark:border-[#1f1f1f]">
            <div className="flex items-center gap-2.5">
                <div className="flex shrink-0 items-center">
                    <Link href="/" className="">
                        <Avatar size={32} name="Avatar" variant="sunset"
                                colors={["#000000", "#31323E", "#FFFFFF", "#C0C0C0"]}/>
                    </Link>
                </div>
                <div className="flex flex-grow items-center overflow-x-auto">
                    <Breadcrumb className="flex gap-2.5"/>
                </div>
                <div className="flex flex-none items-center">
                    <details className="relative inline-flex">
                        <summary className="inline-flex rounded focus-ring cursor-pointer rounded-full">
                            <div className="relative inline-flex flex-shrink-0 rounded align-top">
                                <Avatar size={32} name="Avatar" variant="beam"
                                        colors={["#000000", "#31323E", "#FFFFFF", "#C0C0C0"]}/>
                            </div>
                        </summary>
                        <div
                            className="absolute mt-1 w-60 flex flex-col gap-5 p-5 rounded right-0
                                bg-[#fafafa] dark:bg-[#161616] border dark:border-[#1f1f1f]">
                            <ul className="flex flex-col gap-2.5">
                                <li>
                                    <Link href="/">Setting</Link>
                                </li>
                                <li>
                                    <Link href="/">Documentation</Link>
                                </li>
                                <li>
                                    <Link href="/">Support</Link>
                                </li>
                                <li>
                                    <Link href="/">Send Feedback</Link>
                                </li>
                                <li>
                                    <Link href="/" onClick={() => {
                                        setUser({loggedIn: false, user: null})
                                        localStorage.removeItem("user")
                                    }}>Sign Out</Link>
                                </li>
                            </ul>
                            <div
                                className="flex justify-between border rounded dark:border-[#1f1f1f] p-1.5 bg-white dark:bg-[#111111]">
                                <label className="w-full flex items-center justify-between space-x-2">
                                    <span>Theme:</span>
                                    <select
                                        className="p-1 px-4 rounded-md bg-[#FAFAFA] dark:bg-[#161616]"
                                    >
                                        <option value="system">System</option>
                                        <option value="dark">Dark</option>
                                        <option value="light">Light</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </details>
                </div>
            </div>
            <Navbar className="navbar flex overflow-x-auto" items={DASHBOARD_ROUTES}/>
        </header>
    )
}