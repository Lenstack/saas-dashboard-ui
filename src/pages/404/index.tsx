import Link from "next/link";

export default function Custom404() {
    return (
        <div>
            <h1>Oops! Page not found</h1>
            <p>The requested page could not be found.</p>
            <Link href="/">Go back to home</Link>
        </div>
    )
}