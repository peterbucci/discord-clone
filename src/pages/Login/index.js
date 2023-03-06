import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { default as LoginLayout } from "components/Login";
import { useStateValue } from "providers/StateProvider";
import { auth } from "firebase.js";

const provider = new GoogleAuthProvider();
export default function Login() {
  const {
    state: { uid },
  } = useStateValue();

  return !uid ? (
    <LoginLayout onClick={() => signInWithRedirect(auth, provider)} />
  ) : (
    <Navigate replace to="/channels/@me" />
  );
}
