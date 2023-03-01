import {DashboardLayout} from "@/layouts";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <div className="flex flex-col gap-2.5">
                <section>
                    <h1 className="text-xl">Welcome to your dashboard</h1>
                </section>
                <section>
                    <p>Here you can manage your institutions, groups, and other settings.</p>
                </section>
            </div>
        </DashboardLayout>
    )
}