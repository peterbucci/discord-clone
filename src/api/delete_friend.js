import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function deleteFriend(userId, friendId) {
  deleteDoc(doc(db, "users", userId, "friends", friendId));
  deleteDoc(doc(db, "users", friendId, "friends", userId));
}
