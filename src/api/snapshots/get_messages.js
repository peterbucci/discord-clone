import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAt,
  where,
} from "firebase/firestore";
import { db } from "firebase.js";
import { actionTypes } from "reducers/state_reducer";
import dispatchMessages from "helpers/dispatch_messages";

export default async function getMessagesSnapshot(
  conversationId,
  dispatch,
  setInitialRender
) {
  // query reference for the messages we want
  const ref = collection(db, "conversations", conversationId, "messages");
  // single query to get startAt snapshot
  const qX = query(ref, orderBy("timestamp", "desc"), limit(100));
  await getDocs(qX).then((snapshot) => {
    // get the starting document for onSnapshot query
    const start = snapshot.docs[snapshot.docs.length - 1];
    // query reference but in reverse, using the last document from the previous query
    const qY = start
      ? query(ref, orderBy("timestamp"), startAt(start))
      : query(ref, orderBy("timestamp"), where("timestamp", ">", new Date()));
    // create listener using startAt snapshot (starting boundary)
    const unsub = onSnapshot(qY, (snapshot) => {
      dispatchMessages(conversationId, snapshot, dispatch);
    });
    // add initial batch of messages
    dispatchMessages(conversationId, snapshot, dispatch);
    // add listener
    dispatch({
      type: actionTypes.SET_UNSUBSCRIBERS,
      unsubscribers: {
        [conversationId + "messages"]: unsub,
      },
    });
    // set next query cursor for getting additional messages
    dispatch({
      type: actionTypes.SET_QUERY_CURSOR,
      queryCursor: {
        [conversationId]: start,
      },
    });

    setInitialRender(false);
  });
}
