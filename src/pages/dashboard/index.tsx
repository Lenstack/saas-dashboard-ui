import {DashboardLayout} from "@/layouts";
import {UserContext} from "@/contexts";
import {useContext} from "react";

export default function Dashboard() {
    const {user} = useContext(UserContext)
    return (
        <DashboardLayout>
            <div className="flex flex-col gap-2.5">
                <section className="flex flex-col gap-6">
                    <h1 className="text-xl">Welcome to your dashboard</h1>
                    <p>Hello {user?.id}! Here you can manage your institutions, groups, and other settings.</p>
                </section>
            </div>
        </DashboardLayout>
    )
}