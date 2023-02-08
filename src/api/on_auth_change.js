import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { actionTypes } from "../reducers/state_reducer";

export default function onAuthChange(
  dispatch,
  initialRenderRef,
  setServerCount,
  setConversationCount,
  setFriendCount,
  unsubscribersRef
) {
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
      setServerCount(-1);
      setConversationCount(-1);
      setFriendCount(-1);
      dispatch({
        type: actionTypes.LOGOUT_USER,
      });
      Object.values(unsubscribersRef.current).forEach((unsubscribe) =>
        unsubscribe()
      );
      unsubscribersRef.current = {};
      // User is signed out
      // ...
    }
    initialRenderRef.current = false;
  });
}
