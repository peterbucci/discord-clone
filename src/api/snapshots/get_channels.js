import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "firebase.js";
import { actionTypes } from "reducers/state_reducer";

export default function getChannels(categoryKey, serverId, dispatch) {
  const channelsQuery = query(
    collection(db, "servers", serverId, "categories", categoryKey, "channels"),
    orderBy("order")
  );
  const unsubscriber = onSnapshot(channelsQuery, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      dispatch({
        type: actionTypes.SET_CHANNELS,
        channels: [data],
      });
    });
  });

  dispatch({
    type: actionTypes.SET_UNSUBSCRIBERS,
    unsubscribers: {
      [categoryKey]: unsubscriber,
    },
  });
}
