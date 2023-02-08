import { collection, getDocs, query, where } from "firebase/firestore";
import createDoc from "helpers/create_doc";
import { db } from "../firebase";
import deleteFriendRequest from "./delete_friend_request";

export default async function addFriend(userId, friendId) {
  const dataX = {
    timestamp: new Date(),
  };
  const friendPath = (id) => ["users", id, "friends"];

  createDoc(friendPath(userId), dataX, friendId);
  createDoc(friendPath(friendId), dataX, userId);

  const userMap = {
    [userId]: null,
    [friendId]: null,
  };
  const q = query(
    collection(db, "conversations"),
    where("users", "==", userMap)
  );

  const querySnapshot = await getDocs(q);

  /**
   * Conversation may exist between users prior to friend request.
   * If so, don't need to create a new one
   */
  if (querySnapshot.empty) {
    const dataY = {
      startDate: new Date(),
      users: userMap,
    };
    const conversationDoc = createDoc(["conversations"], dataY);

    const dataZ = {
      active: true,
    };
    const conversationPath = (id) => ["users", id, "conversations"];
    createDoc(conversationPath(userId), dataZ, conversationDoc.id);
    createDoc(conversationPath(friendId), dataZ, conversationDoc.id);
  }

  // Clear out request now that it has been resolved.
  deleteFriendRequest(friendId, userId, true);
}
