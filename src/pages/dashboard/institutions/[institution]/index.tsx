import Layout from "@/pages/dashboard/layout";
import {useRouter} from "next/router";

export default function Institution() {
    const router = useRouter()
    const {institution} = router.query
    return (
        <Layout>
            <p>{institution}</p>
        </Layout>
    )
}