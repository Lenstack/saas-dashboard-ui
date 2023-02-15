import {useRouter} from "next/router";
import {DashboardLayout} from "@/layouts";

export default function Institution() {
    const router = useRouter()
    const {institution} = router.query
    return (
        <DashboardLayout>
            <p>{institution}</p>
        </DashboardLayout>
    )
}