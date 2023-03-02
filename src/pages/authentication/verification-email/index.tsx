import Link from "next/link";
import {GetServerSideProps} from "next";

export default function VerificationEmail({data, error}: any) {
    if (error) {
        return (
            <div className="container mx-auto h-screen">
                <h1 className="text-2xl">{error.toUpperCase()}</h1>
                <Link href="/authentication/sign-in">
                    Go to Sign In
                </Link>
            </div>
        )
    }
    return (
        <div className="container mx-auto h-screen">
            <h1 className="text-2xl">{data.message.toUpperCase()}</h1>
            <Link href="/authentication/sign-in">
                Go to Sign In
            </Link>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {query} = context
    const {token} = query
    if (!token) {
        return {
            props: {
                error: "Token is required"
            }
        }
    }
    try {
        const response = await fetch(`${process.env.API_URL}/authentication/verification_email?token=${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await response.json()
        return {
            props: {
                data,
            },
        }
    } catch (err) {
        return {
            props: {
                error: "Something went wrong"
            }
        }
    }
}