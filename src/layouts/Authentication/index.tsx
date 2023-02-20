import {ILayoutProps} from "@/interfaces";

export const AuthenticationLayout = ({children}: ILayoutProps) => {
    return (
        <section className="h-screen w-full flex flex-row-reverse">
            <aside
                className="hidden p-5 md:flex flex-col justify-center items-center w-2/4">
                <div className="flex items-center space-x-2.5">
                    <h1 className="text-xl">News</h1>
                </div>
                <div className="md:flex md:flex-col p-5 gap-2.5">
                    <div className="flex flex-col gap-5">
                        <div
                            className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] rounded p-5 flex flex-col gap-5">
                            <div className="flex justify-between">
                                <h2 className="text">New Module Settings</h2>
                                <span>2023-01-02</span>
                            </div>
                            <p className="text-sm">Create your first tenant and start using lensaas.</p>
                        </div>
                        <div
                            className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] rounded p-5 flex flex-col gap-5">
                            <div className="flex justify-between">
                                <h2 className="text">New Module Settings</h2>
                                <span>2023-01-02</span>
                            </div>
                            <p className="text-sm">Create your first tenant and start using lensaas.</p>
                        </div>
                        <div
                            className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] rounded p-5 flex flex-col gap-5">
                            <div className="flex justify-between">
                                <h2 className="text">New Module Settings</h2>
                                <span>2023-01-02</span>
                            </div>
                            <p className="text-sm">Create your first tenant and start using lensaas.</p>
                        </div>
                    </div>
                </div>
            </aside>
            <main className="p-5 w-full border-r border dark:border-[#1f1f1f] flex">
                {children}
            </main>
        </section>
    )
}