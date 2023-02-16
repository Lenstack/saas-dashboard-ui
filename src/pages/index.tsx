import {Navbar} from "@/components";
import Avatar from "boring-avatars";
import {AUTH_ROUTES, HOME_ROUTES} from "@/constants";

export default function Home() {
    return (
        <div className="p-10 w-full h-screen flex flex-col gap-5">
            <header className="flex justify-between">
                <Navbar items={HOME_ROUTES} className="flex flex-row-reverse items-center gap-2.5">
                    <Navbar.Content className="flex items-center space-x-5">
                        <Navbar.Item href="/">
                            <Avatar size={32} name="Avatar" variant="marble"
                                    colors={["#000000", "#3A3A3A", "#A86565", "#C0C0C0"]}/>
                        </Navbar.Item>
                    </Navbar.Content>
                </Navbar>
                <Navbar items={AUTH_ROUTES} className="flex items-center gap-2.5"/>
            </header>
            <main>
                <section>
                    <h1 className="text-5xl font-bold">Work smarter with Lensaas</h1>
                    <p className="text-red-300">Automatize your students management never has been easy!</p>
                </section>
                <section>
                    <h1 className="text-5xl font-bold">Work smarter with Lensaas</h1>
                    <p className="text-red-300">Automatize your students management never has been easy!</p>
                </section>
                <section>
                    <h1 className="text-5xl font-bold">Work smarter with Lensaas</h1>
                    <p className="text-red-300">Automatize your students management never has been easy!</p>
                </section>
                <section>
                    <h1 className="text-5xl font-bold">Work smarter with Lensaas</h1>
                    <p className="text-red-300">Automatize your students management never has been easy!</p>
                </section>
            </main>
            <footer>
                <section>
                    <h1 className="text-xl text-red-300">Footer</h1>
                </section>
            </footer>
        </div>
    )
}
