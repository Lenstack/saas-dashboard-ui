import Layout from "@/pages/dashboard/layout";
import {useRouter} from "next/router";

export default function SettingsDetails() {
    const router = useRouter()
    const {slug} = router.query
    return (
        <Layout>
            <p>{slug}</p>
        </Layout>
    )
}