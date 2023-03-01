import {
  collection,
  endBefore,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter,
  startAt,
} from "firebase/firestore";
import { db } from "firebase.js";
import { actionTypes } from "reducers/state_reducer";
import dispatchMessages from "helpers/dispatch_messages";

export default async function getMoreMessagesSnapshot(
  conversationId,
  dispatch,
  start
) {
  // reference to collection
  const ref = collection(db, "conversations", conversationId, "messages");
  // single query to get new startAt snapshot
  const qX = query(
    ref,
    orderBy("timestamp", "desc"),
    startAfter(start),
    limit(100)
  );
  await getDocs(qX).then((snapshot) => {
    // previous starting boundary becomes new ending boundary
    const end = start;
    const newStart = snapshot.docs[snapshot.docs.length - 1];
    // if new starting cursor exists, create another listener using new boundaries
    if (newStart) {
      const qY = query(
        ref,
        orderBy("timestamp"),
        startAt(newStart),
        endBefore(end)
      );
      let unsub = onSnapshot(qY, (snapshot) => {
        dispatchMessages(conversationId, snapshot, dispatch);
      });
      // add initial batch of messages
      dispatchMessages(conversationId, snapshot, dispatch);
      // add listener
      dispatch({
        type: actionTypes.SET_UNSUBSCRIBERS,
        unsubscribers: {
          [conversationId + "messages" + start.id]: unsub,
        },
      });
    }
    // set next query cursor for getting additional messages
    dispatch({
      type: actionTypes.SET_QUERY_CURSOR,
      queryCursor: {
        [conversationId]: newStart,
      },
    });
  });
}
