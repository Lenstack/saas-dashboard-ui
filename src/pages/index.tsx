import {Navbar} from "@/components";
import Avatar from "boring-avatars";

export default function Home() {
    return (
        <div className="w-full h-screen flex flex-col">
            <header className="p-10">
                <Navbar className="flex justify-between items-center gap-2.5">
                    <Navbar.Content className="flex items-center space-x-2.5">
                        <Navbar.Item href="/">
                            <Avatar size={32} name="Avatar" variant="marble"
                                    colors={["#000000", "#3A3A3A", "#A86565", "#C0C0C0"]}/>
                        </Navbar.Item>
                        <Navbar.Item href="/">Home</Navbar.Item>
                        <Navbar.Item href="/">Plans</Navbar.Item>
                        <Navbar.Item href="/dashboard">Dashboard</Navbar.Item>
                    </Navbar.Content>
                    <Navbar.Content className="flex items-center space-x-5">
                        <Navbar.Item href="/sign-in">Sign In</Navbar.Item>
                        <Navbar.Item href="/sign-up">Sign Up</Navbar.Item>
                    </Navbar.Content>
                </Navbar>
            </header>
            <main className="p-10">
                <section className="">
                    Hero Section
                </section>
                <section className="">
                    How it works Section
                </section>
                <section className="">
                    Customers Section
                </section>
                <section className="">
                    Pricing Section
                </section>
            </main>
            <footer className="p-10">
                Footer Section
            </footer>
        </div>
    )
}
