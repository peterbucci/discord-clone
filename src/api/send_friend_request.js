import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function sendFriendRequest(userId, friendId) {
  const pendingRequest = doc(
    collection(db, "users", userId, "friendRequests"),
    friendId
  );
  const friendRequest = doc(
    collection(db, "users", friendId, "friendRequests"),
    userId
  );
  setDoc(pendingRequest, {
    id: pendingRequest.id,
    timestamp: new Date(),
    sender: userId,
  });
  setDoc(friendRequest, {
    id: friendRequest.id,
    timestamp: new Date(),
    sender: userId,
  });
}
