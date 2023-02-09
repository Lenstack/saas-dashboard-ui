import {Navbar} from "@/components"
import {ILayoutProps} from "@/interfaces"
import Avatar from "boring-avatars"
import Link from "next/link"

export const LayoutDashboard = ({children}: ILayoutProps) => {
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
                    <div className="flex flex-grow items-center">
                        <Link href="/">Tenancy</Link>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="block shrink-0">
                                <path d="M9.75 20.25L14.25 3.75" stroke="currentColor" strokeWidth="1.5"
                                      strokeLinecap="round"></path>
                            </svg>
                        </div>
                        <div>
                            <Link href="/">Overview</Link>
                        </div>
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
                                        <Link href="/sign-in">Sign Out</Link>
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
                    <Navbar.Item href="/" className="whitespace-nowrap border-b-2 pb-2.5 border-[#A86565] font-semibold">
                        Overview
                    </Navbar.Item>
                    <Navbar.Item href="/">
                        Settings
                    </Navbar.Item>
                </Navbar>
            </header>
            <main className="p-10 flex flex-col">
                {children}
            </main>
        </section>
    )
}

export const LayoutHome = ({children}: ILayoutProps) => {
    return (
        <section className="h-screen flex flex-row-reverse">
            <aside
                className="hidden p-5 w-full h-screen md:flex flex-col justify-center items-center gap-1.5 w-1/3 space-x-2.5">
                <div className="flex items-center space-x-2.5">
                    <Avatar size={50} name="Avatar" variant="sunset"
                            colors={["#000000", "#3A3A3A", "#A86565", "#C0C0C0"]}/>
                    <h1 className="text-xl">Welcome to lensaas.</h1>
                </div>
                <div className="md:flex md:flex-col p-5 gap-2.5">
                    <h2 className="text text-center">News</h2>
                    <div className="flex flex-col gap-5">
                        <div
                            className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] rounded p-5 flex flex-col gap-5">
                            <div className="flex justify-between">
                                <h2 className="text">New Module Settings</h2>
                                <span>2023-01-02</span>
                            </div>
                            <p className="text-sm">Create your first tenant and start using lensaas.</p>
                        </div>
                        <div
                            className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] rounded p-5 flex flex-col gap-5">
                            <div className="flex justify-between">
                                <h2 className="text">New Module Settings</h2>
                                <span>2023-01-02</span>
                            </div>
                            <p className="text-sm">Create your first tenant and start using lensaas.</p>
                        </div>
                        <div
                            className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] rounded p-5 flex flex-col gap-5">
                            <div className="flex justify-between">
                                <h2 className="text">New Module Settings</h2>
                                <span>2023-01-02</span>
                            </div>
                            <p className="text-sm">Create your first tenant and start using lensaas.</p>
                        </div>
                    </div>
                </div>
            </aside>
            <main className="p-5 w-full h-screen md:w-2/3 border-r border dark:border-[#1f1f1f] flex justify-center">
                {children}
            </main>
        </section>
    )
}