import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { actionTypes } from "reducers/state_reducer";

/**
 * @description Attachs a listener to watch for changes to the user auth. If the
 *    callback contains a user object the user is logged in, otherwise they're
 *    logged out. If logged in dispatch a request to add the user UID to the state,
 *    if not, reset all user snapshots back to false.
 *
 * @param {function} dispatch - dispatch an action to request a state update.
 * @param {function} setServerSnapshots - setState function to indicate that
 *  listeners were attached for all of the current user's servers
 * @param {function} setConversationSnapshots - setState function to indicate that
 *  listeners were attached for all of the current user's conversation
 * @param {function} setFriendSnapshots - setState function to indicate that
 *  listeners were attached for all of the current user's friends
 * @returns an unsubscriber to detach auth listener
 */

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
    } else {
      setServerSnapshots(false);
      setConversationSnapshots(false);
      setFriendSnapshots(false);
      // User is signed out
    }
    dispatch({
      type: actionTypes.SET_INITIAL_RENDER,
      initialRender: false,
    });
  });
}
