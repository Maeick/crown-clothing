import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();

        const userDocRef = createUserDocumentFromAuth(response.user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google PopUp</button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;
