import {ReactNode} from "react";
import {Navbar} from "@/components";

interface ILayoutProps {
    children: ReactNode
}

export const Layout = ({children}: ILayoutProps) => {
    return (
        <div className="flex flex-col h-screen bg-white dark:bg-black dark:text-white">
            <div className="">
                <header className="">
                    <div className="flex justify-between">
                        <div>
                            logo
                        </div>
                        <div>
                            tenancy
                        </div>
                        <div>
                            <details>
                                <summary>Menu</summary>
                                <div>
                                    <ul>
                                        <li>Home</li>
                                        <li>Blog</li>
                                        <li>Projects</li>
                                    </ul>
                                    <div>
                                        <div>
                                            <label>Dark Mode</label>
                                            <select>
                                                <option value="system">System</option>
                                                <option value="dark">Dark</option>
                                                <option value="light">Lignt</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                    <div>
                        <Navbar>
                            <Navbar.Item href="/">Home</Navbar.Item>
                            <Navbar.Item href="/blog">Blog</Navbar.Item>
                            <Navbar.Item href="/projects">Projects</Navbar.Item>
                        </Navbar>
                    </div>
                </header>
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}