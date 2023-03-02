import {ILayoutProps} from "@/interfaces";
import {DashboardHeaderContainer} from "@/containers";
import {ModalProvider} from "@/contexts/Modal";

export const DashboardLayout = ({children}: ILayoutProps) => {
    return (
        <ModalProvider>
            <DashboardHeaderContainer/>
            <main className="p-10 mx-auto max-w-7xl">
                {children}
            </main>
        </ModalProvider>
    )
}