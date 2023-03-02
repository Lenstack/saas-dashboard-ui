import {ILayoutProps} from "@/interfaces";
import {DashboardHeaderContainer} from "@/containers";
import {ModalProvider} from "@/contexts/Modal";

export const DashboardLayout = ({children}: ILayoutProps) => {
    return (
        <ModalProvider>
            <DashboardHeaderContainer/>
            <main className="p-10">
                {children}
            </main>
        </ModalProvider>
    )
}