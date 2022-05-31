import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import gmailConfig from '../gmail.config.json'


export default function Layout({ children }) {

    const router = useRouter()

    const updateSigninStatus = (isSignedIn) => {
        if (isSignedIn) {
        router.push('/list');
        } else {
        router.push('/');
        }
    }

    const initClient = () => {
        gapi.client.init({
          discoveryDocs: gmailConfig.discoveryDocs,
          clientId: gmailConfig.clientId,
          scope: gmailConfig.scope
        }).then(function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          // Handle the initial sign-in state.
          return updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        });
      }

    useEffect(() => {
        let loadingInterval = setInterval(() => {
            if(gapi) {
            gapi.load('client:auth2', () => {
                initClient()
            });
            clearInterval(loadingInterval);
            }
        }, 100)
    }, null);


    return (
        <>
        <Head>
            <title>Next Mail</title>
            <meta name="description" content="A mail client based on Next.js and Gmail API" />
            <link rel="icon" href="/favicon.ico" />
            <script src="https://apis.google.com/js/api.js"></script>
        </Head>
        {children}
        </>
    )
}