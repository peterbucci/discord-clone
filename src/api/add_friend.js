import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import deleteFriendRequest from "./delete_friend_request";

export default async function addFriend(userId, friendId) {
  const userFriendDoc = doc(
    collection(db, "users", userId, "friends"),
    friendId
  );
  setDoc(userFriendDoc, {
    id: userFriendDoc.id,
    timestamp: new Date(),
    note: "",
  });

  const friendsFriendDoc = doc(
    collection(db, "users", friendId, "friends"),
    userId
  );
  setDoc(friendsFriendDoc, {
    id: friendsFriendDoc.id,
    timestamp: new Date(),
    note: "",
  });

  // Create Conversation

  const conversationsRef = collection(db, "conversations");
  const userMap = {
    [userId]: null,
    [friendId]: null,
  };
  const q = query(conversationsRef, where("users", "==", userMap));

  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    const conversationDoc = doc(collection(db, "conversations"));
    setDoc(conversationDoc, {
      id: conversationDoc.id,
      startDate: new Date(),
      users: [userId, friendId],
    });

    const userConversationDoc = doc(
      collection(db, "users", userId, "conversations"),
      conversationDoc.id
    );
    setDoc(userConversationDoc, {
      id: userConversationDoc.id,
      active: true,
    });

    const friendConversationDoc = doc(
      collection(db, "users", friendId, "conversations"),
      conversationDoc.id
    );
    setDoc(friendConversationDoc, {
      id: friendConversationDoc.id,
      active: true,
    });
  }

  // Create Conversation

  deleteFriendRequest(friendId, userId, true);
}
