import { serverTimestamp } from "firebase/firestore";
import { signOut } from "firebase/auth";
import updateUser from "../update_user";
import { actionTypes } from "reducers/state_reducer";
import { auth } from "firebase.js";

/**
 * @description Update the user document for the current user. Set their status
 *    to offline and get a server timestamp to indicate when they were last online.
 *    Call all unsubscribers to detach snapshot listeners. Update the local state
 *    back to its default and log the user out of firebase.
 *
 * @param {string} userId - ID of current user.
 * @param {object} unsubscribers - map of unsubscribers for any listeners that
 *    have been created.
 * @param {function} dispatch - dispatch an action to request a state update.
 */

export default function logOut(userId, unsubscribers, dispatch) {
  updateUser(userId, { status: "Offline", lastOnline: serverTimestamp() }).then(
    () => {
      Object.values(unsubscribers).forEach((unsubscribe) => unsubscribe());
      dispatch({
        type: actionTypes.LOGOUT_USER,
      });
      signOut(auth);
    }
  );
}
