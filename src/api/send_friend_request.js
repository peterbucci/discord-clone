import createDoc from "helpers/create_doc";

/**
 * @description Create documents in each users' friendRequest subcollection.
 *
 * @param {string} userId - ID of the current user
 * @param {string} friendId - ID of the user receiving the friend request
 */

export default function sendFriendRequest(userId, friendId) {
  const collectionPath = (id) => ["users", id, "friendRequests"];
  const data = {
    timestamp: new Date(),
    sender: userId,
  };
  createDoc(collectionPath(userId), data, friendId);
  createDoc(collectionPath(friendId), data, userId);
}
