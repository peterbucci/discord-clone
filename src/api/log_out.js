import { signOut } from "firebase/auth";
import updateUser from "./update_user";
import { actionTypes } from "reducers/state_reducer";
import { auth } from "firebase.js";

export default function logOut(userId, unsubscribers, dispatch) {
  updateUser(userId, { status: "Offline" }).then(() => {
    Object.values(unsubscribers).forEach((unsubscribe) => unsubscribe());
    dispatch({
      type: actionTypes.LOGOUT_USER,
    });
    signOut(auth);
  });
}
