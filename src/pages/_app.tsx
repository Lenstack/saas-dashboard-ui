import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head"

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
            </Head>
            <Component {...pageProps} />
        </>
    )
}
