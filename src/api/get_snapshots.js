import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  orderBy,
  setDoc,
} from "firebase/firestore";
import { actionTypes } from "../reducers/state_reducer";
import { db, auth } from "../firebase";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getUserSnapshot(dispatch, uid) {
  const q = query(collection(db, "users"), where("uid", "==", uid));
  return onSnapshot(q, (querySnapshot) => {
    if (querySnapshot.empty) {
      const user = auth.currentUser;
      const newMessageRef = doc(collection(db, "users"));
      setDoc(newMessageRef, {
        uid,
        id: newMessageRef.id,
        name: user.displayName.split(" ")[0],
        signup: new Date(),
        status: "Online",
        tag: randomIntFromInterval(1000, 9999),
        email: user.email,
      });
    }
    querySnapshot.forEach((doc) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: doc.id,
      });
      dispatch({
        type: actionTypes.SET_USERS,
        users: [doc.data()],
      });
    });
  });
}

export function getFriendsSnapshot(
  userId,
  unsubscribers,
  dispatch,
  setFriendCount
) {
  const q = query(collection(db, "users", userId, "friends"));
  return onSnapshot(q, (querySnapshot) => {
    setFriendCount(querySnapshot.size);
    querySnapshot.docChanges().forEach((change) => {
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
        if (!unsubscribers[id]) {
          const unsubscribe = onSnapshot(doc(db, "users", id), (docY) => {
            dispatch({
              type: actionTypes.SET_USERS,
              users: [docY.data()],
            });
          });
          unsubscribers[id] = unsubscribe;
        }
      }
    });
  });
}

export function getFriendRequestsSnapshot(userId, unsubscribers, dispatch) {
  const q = query(collection(db, "users", userId, "friendRequests"));
  return onSnapshot(q, (querySnapshot) => {
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

        if (!unsubscribers[id]) {
          const unsubscribe = onSnapshot(doc(db, "users", id), (docY) => {
            dispatch({
              type: actionTypes.SET_USERS,
              users: [docY.data()],
            });
          });
          unsubscribers[id] = unsubscribe;
        }
      }
    });
  });
}

export function getConversationsSnapshot(
  userId,
  unsubscribers,
  dispatch,
  setConversationCount
) {
  const q = query(collection(db, "users", userId, "conversations"));
  return onSnapshot(q, (querySnapshot) => {
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
        unsubscribers[id] = conversationUnsubscribe;
        unsubscribers[id + "messages"] = messagesUnsubscribe;
      }
    });
  });
}

export function getNotesSnapshot(userId, dispatch) {
  const q = query(collection(db, "users", userId, "notes"));
  return onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      dispatch({
        type: actionTypes.SET_NOTES,
        notes: [doc.data()],
      });
    });
  });
}

export function getChannelsSnapshot(
  userId,
  unsubscribers,
  dispatch,
  setChannelCount
) {
  const q = query(collection(db, "users", userId, "channels"));
  return onSnapshot(q, (querySnapshot) => {
    setChannelCount(querySnapshot.size);
    querySnapshot.forEach((docX) => {
      const id = docX.id;
      if (!unsubscribers[id]) {
        const unsubscribe = onSnapshot(doc(db, "channels", id), (docY) => {
          dispatch({
            type: actionTypes.SET_CHANNELS,
            channels: [docY.data()],
          });
        });
        unsubscribers[id] = unsubscribe;
      }
    });
  });
}
