import createConversation from "./create_conversation";
import deleteFriendRequest from "./delete_friend_request";
import createDoc from "helpers/create_doc";

/**
 * @description Create documents in the users/friends subcollection for both users.
 *    If no conversation exists between users, create documents in the conversations
 *    collection and both users/conversations subcollections. Delete the friend request
 *    documents in both users/friendRequests subcollections.
 *
 * @param {string} userId - provides the id of the current logged in user
 * @param {string} friendId - provides the id of the user being added as a friend
 */

export default async function addFriend(userId, friendId) {
  const docData = {
    timestamp: new Date(),
  };
  const createFriendPath = (id) => ["users", id, "friends"];
  await createDoc(createFriendPath(userId), docData, friendId);
  await createDoc(createFriendPath(friendId), docData, userId);
  // Create conversation, if one doesn't already exist
  await createConversation(userId, friendId);
  // Clear out request now that it has been resolved.
  deleteFriendRequest(friendId, userId, true);
}
