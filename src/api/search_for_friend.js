import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "firebase.js";
import sendFriendRequest from "./send_friend_request";

export default async function searchForFriend(userId, friendSearch) {
  const usersRef = collection(db, "users");
  const q = query(
    usersRef,
    where("name", "==", friendSearch[0]),
    where("tag", "==", friendSearch[1]),
    limit(1)
  );

  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    return "checkSpelling";
  } else {
    const friendId = querySnapshot.docs[0].id;
    sendFriendRequest(userId, friendId);
    return "success";
  }
}
