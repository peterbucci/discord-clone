import { doc, deleteDoc } from "firebase/firestore";
import { db } from "firebase.js";

export default function deleteFriendRequest(id, user, deleteBoth) {
  deleteDoc(doc(db, "users", user, "friendRequests", id));
  if (deleteBoth) deleteDoc(doc(db, "users", id, "friendRequests", user));
}
