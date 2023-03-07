import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

/**
 * @description Delete document in friend subcollection of both users.
 *
 * @param {string} userId - ID of the current user
 * @param {string} friendId - ID of user's friend
 */

export default function deleteFriend(userId, friendId) {
  deleteDoc(doc(db, "users", userId, "friends", friendId));
  deleteDoc(doc(db, "users", friendId, "friends", userId));
}
