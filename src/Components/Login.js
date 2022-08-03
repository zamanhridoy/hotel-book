import React, { useContext } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import firebaseConfig from './firebase.config';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { UserContext } from '../App';
import { useLocation, useNavigate } from 'react-router-dom';

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const Login = () => {
    const [loggedInUser, setLogedInUser] = useContext(UserContext);
    
    let navigate = useNavigate();
    
    let location = useLocation();
    

    let from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                const { displayName, email, photoURL } = user;
                const signedInUser = { name: displayName, email, photoURL, isSignedIn: true }
                console.log(user);
                setLogedInUser(signedInUser);
                console.log(loggedInUser);

                navigate(from, { replace: true });



                // ...
            }).catch((error) => {
                // // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // // The email of the user's account used.
                // const email = error.customData.email;
                // // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }
    const handleSighOut = ()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
            const signedInUser = {isSignedIn: false }
            setLogedInUser(signedInUser);
        }).catch((error) => {
            // An error happened.
        });
    }
    

    return (
        <div style={{ textAlign: 'center' }} >
            <h1>Sign In Page</h1>
            {
                loggedInUser.isSignedIn? <button onClick={handleSighOut}> Sign Out</button>:
                
            <Button variant='outlined' style={{ color: '#4285F4' }} onClick={handleGoogleSignIn}>Sign In With <IconButton>  <GoogleIcon style={{ color: '#4285F4' }} /> </IconButton></Button>
            }
        </div>
    );
};

export default Login;