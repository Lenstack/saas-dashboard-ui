import {ILayoutProps} from "@/interfaces";
import {DashboardHeaderContainer} from "@/containers";
import {ModalProvider} from "@/contexts";
import {ProtectedGuard} from "@/helpers";

export const DashboardLayout = ({children}: ILayoutProps) => {
    return (
        <ProtectedGuard>
            <ModalProvider>
                <DashboardHeaderContainer/>
                <main className="p-10 mx-auto max-w-7xl">
                    {children}
                </main>
            </ModalProvider>
        </ProtectedGuard>
    )
}