import {SettingsLayout} from "@/layouts";

export default function Settings() {
    return (
        <SettingsLayout>
            <section className="flex flex-col gap-2.5">
                <h1>General</h1>
                <p>Settings and options for your account.</p>
            </section>
        </SettingsLayout>
    )
}