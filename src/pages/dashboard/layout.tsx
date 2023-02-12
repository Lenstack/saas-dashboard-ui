import {ILayoutProps} from "@/interfaces";
import Link from "next/link";
import Avatar from "boring-avatars";
import {Breadcrumb, Navbar} from "@/components";

export default function Layout({children}: ILayoutProps) {
    return (
        <section className="h-screen w-full flex flex-col">
            <header className="p-10 flex flex-col gap-5 border-b dark:border-[#1f1f1f]">
                <div className="flex items-center gap-2.5">
                    <div className="flex shrink-0 items-center">
                        <Link href="/" className="">
                            <Avatar size={32} name="Avatar" variant="marble"
                                    colors={["#000000", "#3A3A3A", "#A86565", "#C0C0C0"]}/>
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
                                            colors={["#000000", "#3A3A3A", "#A86565", "#C0C0C0"]}/>
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
                                        <Link href="/authentication/sign-in">Sign Out</Link>
                                    </li>
                                </ul>
                                <div
                                    className="flex justify-between border rounded dark:border-[#1f1f1f] p-1.5 bg-white dark:bg-[#161616]">
                                    <label>
                                        <span>Theme</span>
                                    </label>
                                    <select className="bg-white dark:bg-[#111111] px-2.5">
                                        <option value="system">System</option>
                                        <option value="dark">Dark</option>
                                        <option value="light">Light</option>
                                    </select>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
                <Navbar className="navbar flex overflow-x-auto">
                    <Navbar.Item href="/dashboard"
                                 className="whitespace-nowrap border-b-2 pb-2.5 border-[#A86565] font-semibold">
                        Overview
                    </Navbar.Item>
                    <Navbar.Item href="/dashboard/settings">
                        Settings
                    </Navbar.Item>
                </Navbar>
            </header>
            <main className="p-10">
                {children}
            </main>
        </section>
    )
}