import { useState, useEffect } from 'react';

function useMails() {

    const [mails, setMails] = useState(undefined);

    async function getMails() {
        let response;

        try {
            //response = gapi.auth2.getAuthInstance().currentUser.get()
            //    .getBasicProfile();
            

        } catch (err) {
            // console.log(err.message);
            return;
        }
    }



    useEffect(() => {
        
    });

  return {};
}

export default useMails;