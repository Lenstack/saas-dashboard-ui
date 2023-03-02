import {ILayoutProps} from "@/interfaces";
import {DashboardHeaderContainer} from "@/containers";

export const DashboardLayout = ({children}: ILayoutProps) => {
    return (
        <>
            <DashboardHeaderContainer/>
            <main className="p-10">
                {children}
            </main>
        </>
    )
}