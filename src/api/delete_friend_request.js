import { doc, deleteDoc } from "firebase/firestore";
import { db } from "firebase.js";

/**
 * @description Delete the requested document in the user's friendRequest
 *    subcollection. Delete document from other user's subcollection if requested.
 *
 * @param {string} otherUserId - ID of the other user involved in the request
 * @param {string} userId - ID of the current user
 * @param {boolean} deleteBoth - boolean indicating whether both requests should be
 *    deleted or just the current user's request.
 */

export default function deleteFriendRequest(otherUserId, userId, deleteBoth) {
  deleteDoc(doc(db, "users", userId, "friendRequests", otherUserId));
  if (deleteBoth)
    deleteDoc(doc(db, "users", otherUserId, "friendRequests", userId));
}
