// For "Firebase Authentication"

1. firstly create a basic react app, 
2. created some folders like components, assets, public, pages etc.
3.after that install tailwindcss, react-icons, react-router-dom, and some othe packages
4.then integrate react-router-dom in out main.jsx file, then create the routes in app.jsx file
5.then for basic animations , install  "motion " ;-   "npm install motion"
6. after applying little animation, we will do authentication via firebase
    // for authentication, firstly go to firebase website and sign up
    // then go to console
    //click on create project and give the name to the project
    //not want to add ai-gemini , so disable it, then continue it
    // then again disable gemini features
    // wait untill finishing the project
    //click on continue
    //click on "+add app"
    // but we can to do authentication
    // so we'll simply click on security and then click on authentication
    // click on get started
    // click on "google" and "enable" the button
    // and give the support email and save it
    // now i want to add it in website, so go to "project overview" and click on "+add app";
    //then click on web
    //give the register name
    // then register it
    // after that, we'll get the script by the firebase, so follow the steps which is written

    // after that created a folder called "utils" , inside that created a file again called "firebase.js"

    // and paste the code given by "firebase"


{{NOTE(RED MARKED):-
            * IN FRONTEND, there is the different way to use ".env" variable, when you created your project via "vite"

                - import.meta.env.VITE_ENV_ELEMENT_NAME

            * Since you're using Vite (import.meta.env), environment variables that you want to access in frontend code must start with:
                - VITE_
}}


    // after adding the code of firebase and adding api in ".env" file,
    // have to add more code in the "firebase.js" file
    // Now we need "auth and provider"
    // here is the code 
                //--- need it for "firebase" authentication
                    const auth = getAuth(app);
                    const provider = new GoogleAuthProvider();

//--------HERE IS THE WHOLE CODE FOR "firebase.js" file------



import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"; // extra stuff for firebase authentication

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDING_ID,
  appId: import.meta.env.VITE_APP_ID
};



const app = initializeApp(firebaseConfig);

// need it for "firebase" authentication
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider};


// AFTER THAT FOR OPENING THE AUTHENTICATION WINDOW WHILE CLICKING ON THE BUTTON, THERE WILL BE THE FUNCTION, 
// for that also , need some stuff from firebase package, which are
    //--signInWithPopup(auth, provider) function


{{TIPS(RED MARKED) :-  once .env file updates , server or client need to be restart}}