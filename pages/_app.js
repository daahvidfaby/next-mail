import Head from 'next/head'
import SignIn from '../components/utils/signIn'
import '../styles/globals.css'

export default function AppLayout({ Component, pageProps }) {
    return (
      <>
        <Head>
            <title>Next Mail</title>
            <meta name="description" content="A mail client based on Next.js and Gmail API" />
            <link rel="icon" href="/favicon.ico" />
            <script src="https://apis.google.com/js/api.js"></script>
        </Head>
        <SignIn>
          <Component {...pageProps} />
        </SignIn>
      </>
    )
  }
