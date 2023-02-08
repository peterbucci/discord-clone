import createDoc from "helpers/create_doc";

export default function sendFriendRequest(userId, friendId) {
  const collectionPath = (id) => ["users", id, "friendRequests"];
  const data = {
    timestamp: new Date(),
    sender: userId,
  };
  createDoc(collectionPath(userId), data, friendId);
  createDoc(collectionPath(friendId), data, userId);
}
