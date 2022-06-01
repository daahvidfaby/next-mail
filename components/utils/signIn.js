import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import gapiConfig from '../../gapi.config.json'


export default function SignIn({ children }) {

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
          discoveryDocs: gapiConfig.discoveryDocs,
          clientId: gapiConfig.clientId,
          scope: gapiConfig.scope
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
            {children}
        </>
    )
}