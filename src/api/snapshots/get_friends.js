import { collection, query, onSnapshot } from "firebase/firestore";
import { actionTypes } from "reducers/state_reducer";
import { db } from "firebase.js";
import getUserSnapshot from "./get_user";

export default function getFriendsSnapshot(
  userId,
  unsubscribers,
  dispatch,
  setFriendSnapshots
) {
  const q = query(collection(db, "users", userId, "friends"));
  const snapshot = onSnapshot(q, (querySnapshot) => {
    querySnapshot.empty && setFriendSnapshots(true);
    querySnapshot.docChanges().forEach((change, i, arr) => {
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
        getUserSnapshot(id, unsubscribers, dispatch);
      }
      i + 1 === arr.length && setFriendSnapshots(true);
    });
  });
  dispatch({
    type: actionTypes.SET_UNSUBSCRIBERS,
    unsubscribers: {
      friends: snapshot,
    },
  });
}
