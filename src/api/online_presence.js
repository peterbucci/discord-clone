import {
  getDatabase,
  ref,
  onValue,
  push,
  onDisconnect,
  set,
  serverTimestamp,
} from "firebase/database";
import { actionTypes } from "reducers/state_reducer";

export default function onlinePresence(userId, dispatch) {
  // Since I can connect from multiple devices or browser tabs, we store each connection instance separately
  // any time that connectionsRef's value is null (i.e. has no children) I am offline
  const db = getDatabase();

  const myConnectionsRef = ref(db, `users/${userId}/connections`);
  // stores the timestamp of my last disconnect (the last time I was seen online)
  const lastOnlineRef = ref(db, `users/${userId}/lastOnline`);

  const connectedRef = ref(db, ".info/connected");
  const unsub = onValue(connectedRef, (snap) => {
    if (snap.val() === true) {
      // We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)
      const con = push(myConnectionsRef);

      // When I disconnect, remove this device
      onDisconnect(con).remove();

      // Add this device to my connections list
      // this value could contain info about the device or a timestamp too
      set(con, true);

      // When I disconnect, update the last time I was seen online
      onDisconnect(lastOnlineRef).set(serverTimestamp());
    }
  });

  dispatch({
    type: actionTypes.SET_UNSUBSCRIBERS,
    unsubscribers: {
      onlinePresence: unsub,
    },
  });
}
