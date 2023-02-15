import {SettingsLayout} from "@/layouts";

export default function ApiKeys() {
    return (
        <SettingsLayout>
            <section className="flex flex-col gap-2.5">
                <h1>API Keys</h1>
                <p>Generate API keys to use with the API.</p>
            </section>
        </SettingsLayout>
    )
}