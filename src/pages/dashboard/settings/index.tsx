import Layout from "@/pages/dashboard/layout";
import {Navbar} from "@/components";

export default function Settings() {
    return (
        <Layout>
            <div>
                <section className="flex gap-50">
                    <Navbar className="flex flex-col gap-2.5">
                        <Navbar.Item href="/dashboard/settings">General</Navbar.Item>
                        <Navbar.Item href="/dashboard/settings/security">Security</Navbar.Item>
                        <Navbar.Item href="/dashboard/settings/notifications">Notifications</Navbar.Item>
                        <Navbar.Item href="/dashboard/settings/teams">Teams</Navbar.Item>
                        <Navbar.Item href="/dashboard/settings/billing">Billing</Navbar.Item>
                        <Navbar.Item href="/dashboard/settings/api-key">Api Keys</Navbar.Item>
                    </Navbar>
                </section>
            </div>
        </Layout>
    )
}