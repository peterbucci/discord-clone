import {
  collection,
  query,
  onSnapshot,
  doc,
  orderBy,
} from "firebase/firestore";
import { actionTypes } from "reducers/state_reducer";
import { db } from "firebase.js";

export default function getConversationsSnapshot(
  userId,
  unsubscribers,
  dispatch,
  setConversationCount
) {
  const q = query(collection(db, "users", userId, "conversations"));
  const snapshot = onSnapshot(q, (querySnapshot) => {
    setConversationCount(querySnapshot.size);
    querySnapshot.forEach((docX) => {
      const dataX = docX.data();
      const id = docX.id;
      if (dataX.active) {
        dispatch({
          type: actionTypes.SET_ACTIVE_CONVERSATIONS,
          activeConversation: id,
        });
      } else {
        dispatch({
          type: actionTypes.REMOVE_ACTIVE_CONVERSATIONS,
          activeConversation: id,
        });
      }
      if (!unsubscribers[id]) {
        const conversationUnsubscribe = onSnapshot(
          doc(db, "conversations", id),
          (docY) => {
            const dataY = docY.data();
            Object.keys(dataY.users).forEach((userId) => {
              if (!unsubscribers[userId]) {
                const unsubscribe = onSnapshot(
                  doc(db, "users", userId),
                  (docZ) => {
                    dispatch({
                      type: actionTypes.SET_USERS,
                      users: [docZ.data()],
                    });
                  }
                );
                unsubscribers[id] = unsubscribe;
              }
            });
            dispatch({
              type: actionTypes.SET_CONVERSATIONS,
              conversations: [dataY],
            });
          }
        );

        const messagesQuery = query(
          collection(db, "conversations", id, "messages"),
          orderBy("timestamp")
        );
        const messagesUnsubscribe = onSnapshot(
          messagesQuery,
          (querySnapshot) => {
            querySnapshot.forEach((docZ) => {
              const dataZ = docZ.data();
              dispatch({
                type: actionTypes.SET_MESSAGES,
                id,
                messages: [dataZ],
              });
            });
          }
        );

        dispatch({
          type: actionTypes.SET_UNSUBSCRIBERS,
          unsubscribers: {
            [id]: conversationUnsubscribe,
            [id + "messages"]: messagesUnsubscribe,
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
