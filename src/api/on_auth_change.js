import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { actionTypes } from "../reducers/state_reducer";

export default function onAuthChange(dispatch, initialRenderRef) {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      dispatch({
        type: actionTypes.SET_UID,
        uid,
      });
      // ...
    } else {
      dispatch({
        type: actionTypes.LOGOUT_USER,
      });
      // User is signed out
      // ...
    }
    initialRenderRef.current = false;
  });
}
