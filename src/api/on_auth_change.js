import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { actionTypes } from "../reducers/state_reducer";

export default function onAuthChange(
  dispatch,
  setServerCount,
  setConversationCount,
  setFriendCount
) {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
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
      // User is signed out
      // ...
    }
    dispatch({
      type: actionTypes.SET_INITIAL_RENDER,
      initialRender: false,
    });
  });
}
