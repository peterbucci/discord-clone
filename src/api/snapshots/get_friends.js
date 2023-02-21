import { collection, query, onSnapshot, doc } from "firebase/firestore";
import { actionTypes } from "reducers/state_reducer";
import { db } from "firebase.js";

export default function getFriendsSnapshot(
  userId,
  unsubscribers,
  dispatch,
  setFriendCount
) {
  const q = query(collection(db, "users", userId, "friends"));
  const snapshot = onSnapshot(q, (querySnapshot) => {
    setFriendCount(querySnapshot.size);
    querySnapshot.docChanges().forEach((change) => {
      const docX = change.doc;
      const id = docX.id;
      if (change.type === "removed") {
        dispatch({
          type: actionTypes.REMOVE_FRIEND,
          friendId: id,
        });
      } else {
        dispatch({
          type: actionTypes.SET_FRIENDS,
          friends: [docX.data()],
        });
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
    });
  });
  dispatch({
    type: actionTypes.SET_UNSUBSCRIBERS,
    unsubscribers: {
      friends: snapshot,
    },
  });
}
