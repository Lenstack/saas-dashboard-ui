import {ILayoutProps} from "@/interfaces";
import {Navbar} from "@/components";
import {SETTINGS_ROUTES} from "@/constants";
import {DashboardLayout} from "@/layouts";

export const SettingsLayout = ({children}: ILayoutProps) => {
    return (
        <DashboardLayout>
            <div className="flex flex-col lg:flex-row gap-10">
                <Navbar items={SETTINGS_ROUTES} className="flex flex-col gap-4"/>
                <section>
                    {children}
                </section>
            </div>
        </DashboardLayout>
    )
}