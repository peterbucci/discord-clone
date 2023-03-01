import { collection, query, onSnapshot, doc } from "firebase/firestore";
import { actionTypes } from "reducers/state_reducer";
import { db } from "firebase.js";
import getUserSnapshot from "./get_user";

export default function getConversationsSnapshot(
  userId,
  unsubscribers,
  dispatch,
  setConversationSnapshots
) {
  const q = query(collection(db, "users", userId, "conversations"));
  const snapshot = onSnapshot(q, (querySnapshot) => {
    querySnapshot.empty && setConversationSnapshots(true);
    querySnapshot.docs.forEach((docX, i, arr) => {
      const dataX = docX.data();
      const id = docX.id;
      dispatch({
        type: actionTypes[
          dataX.active
            ? "SET_ACTIVE_CONVERSATIONS"
            : "REMOVE_ACTIVE_CONVERSATIONS"
        ],
        activeConversation: id,
      });
      if (!unsubscribers[id]) {
        const conversationUnsubscribe = onSnapshot(
          doc(db, "conversations", id),
          (docY) => {
            const dataY = docY.data();
            Object.keys(dataY.users).forEach((userId) => {
              getUserSnapshot(userId, unsubscribers, dispatch);
            });
            dispatch({
              type: actionTypes.SET_CONVERSATIONS,
              conversations: [dataY],
            });
            i + 1 === arr.length && setConversationSnapshots(true);
          }
        );

        dispatch({
          type: actionTypes.SET_UNSUBSCRIBERS,
          unsubscribers: {
            [id]: conversationUnsubscribe,
          },
        });
      }
    });
  });
  dispatch({
    type: actionTypes.SET_UNSUBSCRIBERS,
    unsubscribers: {
      conversations: snapshot,
    },
  });
}
