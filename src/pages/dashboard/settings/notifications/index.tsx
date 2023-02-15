import {SettingsLayout} from "@/layouts";

export default function Notifications() {
    return (
        <SettingsLayout>
            <section className="flex flex-col gap-2.5">
                <h1>Notifications</h1>
                <p>Manage your notification settings.</p>
            </section>
        </SettingsLayout>
    )
}