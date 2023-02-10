import {Navbar} from "@/components";
import Avatar from "boring-avatars";
import {AUTH_ROUTES, HOME_ROUTES} from "@/constants/module.routes";

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
                        {
                            HOME_ROUTES.map((route, index) => (
                                <Navbar.Item key={index} href={route.to}>{route.name}</Navbar.Item>
                            ))
                        }
                    </Navbar.Content>
                    <Navbar.Content className="flex items-center space-x-5">
                        {
                            AUTH_ROUTES.map((route, index) => (
                                <Navbar.Item key={index} href={route.to}>{route.name}</Navbar.Item>
                            ))
                        }
                    </Navbar.Content>
                </Navbar>
            </header>
            <main className="p-10">

            </main>
            <footer className="p-10">
                Footer Section
            </footer>
        </div>
    )
}
