import { collection, query, onSnapshot } from "firebase/firestore";
import { actionTypes } from "reducers/state_reducer";
import { db } from "firebase.js";

export default function getNotesSnapshot(userId, dispatch) {
  const q = query(collection(db, "users", userId, "notes"));
  const snapshot = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      dispatch({
        type: actionTypes.SET_NOTES,
        notes: [doc.data()],
      });
    });
  });
  dispatch({
    type: actionTypes.SET_UNSUBSCRIBERS,
    unsubscribers: {
      notes: snapshot,
    },
  });
}
