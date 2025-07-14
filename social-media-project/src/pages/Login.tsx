import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in:", result);
      navigate("/profile");
    } catch (error) {
      console.error("Sign in error:", error);
    }
  }

  return (
    <div className="Login">
      <p>Sign in with Google To Continue..</p>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
}