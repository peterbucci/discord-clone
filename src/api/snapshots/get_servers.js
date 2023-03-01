import { collection, query, onSnapshot, doc } from "firebase/firestore";
import { actionTypes } from "reducers/state_reducer";
import { db } from "firebase.js";

export default function getServersSnapshot(
  userId,
  unsubscribers,
  dispatch,
  setServerSnapshots
) {
  const q = query(collection(db, "users", userId, "servers"));
  const snapshot = onSnapshot(q, (querySnapshot) => {
    querySnapshot.empty && setServerSnapshots(true);
    const listeners = querySnapshot.docs.reduce((listeners, docX, i, arr) => {
      const id = docX.id;
      return {
        ...listeners,
        ...(!unsubscribers[id]
          ? {
              [id]: onSnapshot(doc(db, "servers", id), (docY) => {
                dispatch({
                  type: actionTypes.SET_SERVERS,
                  servers: [docY.data()],
                });
                i + 1 === arr.length && setServerSnapshots(true);
              }),
            }
          : {}),
      };
    }, {});

    dispatch({
      type: actionTypes.SET_UNSUBSCRIBERS,
      unsubscribers: {
        servers: snapshot,
        ...listeners,
      },
    });
  });
}
