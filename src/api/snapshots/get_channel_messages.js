import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "firebase.js";
import { actionTypes } from "reducers/state_reducer";

export default function getChannelMessages(
  serverId,
  categoryId,
  channelId,
  dispatch
) {
  const channelQuery = query(
    collection(
      db,
      "servers",
      serverId,
      "categories",
      categoryId,
      "channels",
      channelId,
      "messages"
    ),
    orderBy("timestamp")
  );
  const messagesUnsubscriber = onSnapshot(channelQuery, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      dispatch({
        type: actionTypes.SET_MESSAGES,
        messages: [data],
        id: channelId,
      });
    });
  });
  dispatch({
    type: actionTypes.SET_UNSUBSCRIBERS,
    unsubscribers: {
      [channelId]: messagesUnsubscriber,
    },
  });
}
