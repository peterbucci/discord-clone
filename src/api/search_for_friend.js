import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "firebase.js";

/**
 * @description Search for a user by the username and 4 digit tag.
 *
 * @param {Array} usernameAndTag - an array of strings. The 1st string is a
 *    username, the 2nd a 4 digit tag.
 * @returns
 */

export default async function searchForFriend(usernameAndTag) {
  const [username, tag] = usernameAndTag;
  const usersRef = collection(db, "users");
  const q = query(
    usersRef,
    where("name", "==", username),
    where("tag", "==", tag),
    limit(1)
  );

  return await getDocs(q);
}
