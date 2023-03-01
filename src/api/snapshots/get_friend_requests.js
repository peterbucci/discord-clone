import { collection, query, onSnapshot } from "firebase/firestore";
import { actionTypes } from "reducers/state_reducer";
import { db } from "firebase.js";
import getUserSnapshot from "./get_user";

export default function getFriendRequestsSnapshot(
  userId,
  unsubscribers,
  dispatch
) {
  const q = query(collection(db, "users", userId, "friendRequests"));
  const snapshot = onSnapshot(q, (querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
      const docX = change.doc;
      const id = docX.id;
      if (change.type === "removed") {
        dispatch({
          type: actionTypes.REMOVE_FRIEND_REQUEST,
          friendRequestId: id,
        });
      } else {
        dispatch({
          type: actionTypes.SET_FRIEND_REQUESTS,
          friendRequests: [docX.data()],
        });
        getUserSnapshot(id, unsubscribers, dispatch);
      }
    });
  });
  dispatch({
    type: actionTypes.SET_UNSUBSCRIBERS,
    unsubscribers: {
      friendRequests: snapshot,
    },
  });
}
