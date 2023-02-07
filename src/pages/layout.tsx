import {ReactNode} from "react";
import {Navbar} from "@/components";
import Avatar from "boring-avatars"
import Link from "next/link";

interface ILayoutProps {
    children: ReactNode
}

export default function Layout({children}: ILayoutProps) {
    return (
        <div className="flex flex-col gap-10 h-screen bg-white dark:bg-[#111111] dark:text-white">
            <div className="relative border-b-2 pb-8 dark:border-[#1f1f1f]">
                <header className="px-10 pt-10 flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <div className="flex shrink-0 items-center">
                            <Link href="/">
                                <Avatar size={32} name="Avatar" variant="marble"
                                        colors={["#000000", "#3A3A3A", "#A86565", "#C0C0C0"]}/>
                            </Link>
                        </div>
                        <div className="flex flex-grow items-center">
                            <Link href="/">
                                Tenancy
                            </Link>
                        </div>
                        <div className="flex flex-none items-center">
                            <details className="relative inline-flex">
                                <summary className="inline-flex rounded focus-ring cursor-pointer rounded-full">
                                    <div className="relative inline-flex flex-shrink-0 rounded align-top">
                                        <div className="grid">
                                            <div className="col-start-1 col-end-1 row-start-1 row-end-1 flex">
                                                <Avatar size={32} name="Avatar" variant="beam"
                                                        colors={["#000000", "#3A3A3A", "#A86565", "#C0C0C0"]}/>
                                            </div>
                                        </div>
                                    </div>
                                </summary>
                                <div
                                    className="absolute z-40 mt-1 w-60 flex flex-col gap-6 p-5 rounded right-0
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
                                            <Link href="/">Sign Out</Link>
                                        </li>
                                    </ul>
                                    <div
                                        className="flex justify-between border dark:border-[#1f1f1f] p-1.5 bg-white dark:bg-[#161616]">
                                        <label>
                                            <span>Theme</span>
                                        </label>
                                        <select className="bg-white dark:bg-[#111111]">
                                            <option value="system">System</option>
                                            <option value="dark">Dark</option>
                                            <option value="light">Lignt</option>
                                        </select>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                    <Navbar className="navbar flex overflow-x-auto">
                        <Navbar.Item href="/" className="text-blue-600 dark:text-green-400">
                            Overview
                        </Navbar.Item>
                        <Navbar.Item href="/settings">
                            Settings
                        </Navbar.Item>
                    </Navbar>
                </header>
            </div>
            <main className="px-10">
                {children}
            </main>
        </div>
    )
}