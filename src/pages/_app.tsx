import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head"
import {UserProvider} from "@/contexts"

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta name="theme-color" content="#000000"/>
                <meta name="description" content="Dashboard"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="manifest" href="/manifest.json"/>
                <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png"/>
            </Head>
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </>
    )
}
