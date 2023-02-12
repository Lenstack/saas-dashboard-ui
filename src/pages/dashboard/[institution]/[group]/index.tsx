import {useRouter} from "next/router";
import Layout from "@/pages/dashboard/layout";

export default function Group() {
    const router = useRouter()
    const {institution, group} = router.query
    return (
        <Layout>
            <h1>Group</h1>
            <p>{institution}</p>
            <p>{group}</p>
        </Layout>
    )
}