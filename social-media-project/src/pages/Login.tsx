import { auth, githubProvider, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        console.log("User signed in:", result.user);
        navigate("/profile");
      }
    } catch (error) {
      console.error("Sign in error:");
    }
  };

  const signInWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      if (result.user) {
        console.log("GitHub signed in:", result.user);
        navigate("/profile");
      }
    } catch (error) {
      console.error("GitHub sign-in error:");
    }
  };

  return (
    <div className="Login">
      <p>Sign in with Google To Continue..</p>
      <button onClick={signInWithGoogle}>Sign In with Google</button>

      <p>Sign in with GitHub To Continue..</p>
      <button onClick={signInWithGithub}>Sign In with GitHub</button>
    </div>
  );
};
