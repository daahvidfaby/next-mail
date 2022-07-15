import Head from 'next/head'
import Script from 'next/script'
import SignIn from '../components/utils/signIn'
import '../styles/globals.css'

export default function AppLayout({ Component, pageProps }) {
    return (
      <>
        <Head>
            <title>Next Mail</title>
            <meta name="description" content="A mail client based on Next.js and Gmail API" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="h-full md:h-screen">
          <SignIn>
            <Component {...pageProps} />
          </SignIn>
        </main>
        <Script src="https://apis.google.com/js/api.js"></Script>
      </>
    )
  }
