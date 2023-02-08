import Link from "next/link"

export default function Home() {
    return (
        <div>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/sign-up">Sign Up</Link>
            <Link href="/sign-in">Sign In</Link>
        </div>
    )
}
