import Layout from "@/pages/dashboard/layout";
import {useRouter} from "next/router";

export default function Setting() {
    const router = useRouter()
    const {setting} = router.query
    return (
        <Layout>
            <p>{setting}</p>
        </Layout>
    )
}