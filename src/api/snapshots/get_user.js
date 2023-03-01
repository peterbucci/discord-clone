import { onSnapshot, doc } from "firebase/firestore";
import { actionTypes } from "reducers/state_reducer";
import { db } from "firebase.js";

export default function getUserSnapshot(id, unsubscribers, dispatch) {
  if (!unsubscribers[id]) {
    const snapshot = onSnapshot(doc(db, "users", id), (docY) => {
      dispatch({
        type: actionTypes.SET_USERS,
        users: [docY.data()],
      });
    });
    dispatch({
      type: actionTypes.SET_UNSUBSCRIBERS,
      unsubscribers: {
        [id]: snapshot,
      },
    });
  }
}
