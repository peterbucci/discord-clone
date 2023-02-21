import { collection, query, onSnapshot, doc } from "firebase/firestore";
import { actionTypes } from "reducers/state_reducer";
import { db } from "firebase.js";

export default function getServersSnapshot(
  userId,
  unsubscribers,
  dispatch,
  setServerCount
) {
  const q = query(collection(db, "users", userId, "servers"));
  const snapshot = onSnapshot(q, (querySnapshot) => {
    setServerCount(querySnapshot.size);
    querySnapshot.forEach((docX) => {
      const id = docX.id;
      if (!unsubscribers[id]) {
        const snapshot = onSnapshot(doc(db, "servers", id), (docY) => {
          dispatch({
            type: actionTypes.SET_SERVERS,
            servers: [docY.data()],
          });
        });
        dispatch({
          type: actionTypes.SET_UNSUBSCRIBERS,
          unsubscribers: {
            [id]: snapshot,
          },
        });
      }
    });
    dispatch({
      type: actionTypes.SET_UNSUBSCRIBERS,
      unsubscribers: {
        servers: snapshot,
      },
    });
  });
}
