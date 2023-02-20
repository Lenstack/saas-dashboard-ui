import {ILayoutProps} from "@/interfaces";
import {Navbar} from "@/components";
import {SETTINGS_ROUTES} from "@/constants";
import {DashboardLayout} from "@/layouts";

export const SettingsLayout = ({children}: ILayoutProps) => {
    return (
        <DashboardLayout>
            <div className="flex flex-col gap-5">
                <Navbar items={SETTINGS_ROUTES} className="navbar overflow-auto"/>
                <section className="py-5 w-full">
                    {children}
                </section>
            </div>
        </DashboardLayout>
    )
}