import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { useStateValue } from "providers/StateProvider";
import { auth } from "firebase.js";

const provider = new GoogleAuthProvider();
export default function Login() {
  const {
    state: { uid },
  } = useStateValue();

  return !uid ? (
    <div onClick={() => signInWithPopup(auth, provider)}>Sign in</div>
  ) : (
    <Navigate replace to="/channels/@me" />
  );
}
