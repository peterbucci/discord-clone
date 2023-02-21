import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "firebase.js";
import { actionTypes } from "reducers/state_reducer";

export default function getChannelCategories(serverId, dispatch) {
  const categoriesQuery = query(
    collection(db, "servers", serverId, "categories"),
    orderBy("order")
  );
  const categoriesUnsubscriber = onSnapshot(
    categoriesQuery,
    (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        dispatch({
          type: actionTypes.SET_CHANNEL_CATEGORIES,
          channelCategories: [data],
          server: data.server,
        });
      });
    }
  );
  dispatch({
    type: actionTypes.SET_UNSUBSCRIBERS,
    unsubscribers: {
      [serverId + "categories"]: categoriesUnsubscriber,
    },
  });
}
