import { useState, useEffect } from 'react';

function useUser() {

    const [user, setUser] = useState(undefined);
    const [profilePicture, setProfilePicture] = useState(undefined);

    async function getUser() {
        let response;

        try {
            response = gapi.auth2.getAuthInstance().currentUser.get()
                .getBasicProfile();
            setUser(response);

        } catch (err) {
            // console.log(err.message);
            return;
        }
    }

    async function getImgUrl() {
        let response;

        try {
            response = user.getImageUrl();
            setProfilePicture(response);

        } catch (err) {
            console.log(err.message);
            return;
        }
    }

    const signIn = () => {
        gapi.auth2.getAuthInstance().signIn();
    }

    const signOut = () => {
        gapi.auth2.getAuthInstance().signOut();
    }

    useEffect(() => {
        getUser()
        getImgUrl()
    });

  return {profilePicture, signIn, signOut};
}

export default useUser;