import Link from "next/link"
import {LayoutHome} from "@/components";

export default function Home() {
    return (
        <LayoutHome>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/sign-up">Sign Up</Link>
            <Link href="/sign-in">Sign In</Link>
        </LayoutHome>
    )
}
