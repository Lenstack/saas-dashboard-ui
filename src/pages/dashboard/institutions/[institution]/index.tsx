import {useRouter} from "next/router";
import {DashboardLayout} from "@/layouts";
import {Modal} from "@/components";

export default function Institution() {
    const router = useRouter()
    const {institution} = router.query
    return (
        <DashboardLayout>
            <div>
                <section className="flex justify-between items-center">
                    <span>Create a new group for <span className="text-red-300">{institution}</span> institution</span>
                    <Modal title={"New Group"} header={"New Group"} subtitle={"Create a new group"} content={institution}/>
                </section>
            </div>
        </DashboardLayout>
    )
}