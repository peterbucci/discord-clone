import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { actionTypes } from "../reducers/state_reducer";

export default function onAuthChange(
  dispatch,
  setServerSnapshots,
  setConversationSnapshots,
  setFriendSnapshots
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
      setServerSnapshots(false);
      setConversationSnapshots(false);
      setFriendSnapshots(false);
      // User is signed out
      // ...
    }
    dispatch({
      type: actionTypes.SET_INITIAL_RENDER,
      initialRender: false,
    });
  });
}
