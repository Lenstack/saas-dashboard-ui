import {useRouter} from "next/router";
import {DashboardLayout} from "@/layouts";

export default function Group() {
    const router = useRouter()
    const {group} = router.query
    return (
        <DashboardLayout>
            <h1>Group</h1>
            <p>{group}</p>
        </DashboardLayout>
    )
}