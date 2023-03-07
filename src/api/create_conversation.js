import { collection, getDocs, query, where } from "firebase/firestore";
import createDoc from "helpers/create_doc";
import { db } from "../firebase";

/**
 * @description Create a map of all the users in the conversation. Use it in the
 *      firebase query. Create a conversation if one doesn't already exist.
 *
 * @param  {...string} - list of strings representing the ids of all users involved
 *      in the conversation
 */

export default async function createConversation(...ids) {
  // Use an object with the user ids as keys to make querying conversations easier.
  const userMap = ids.reduce(
    (users, user) => ({
      ...users,
      [user]: null,
    }),
    {}
  );
  const conversationQuery = query(
    collection(db, "conversations"),
    where("users", "==", userMap)
  );

  const querySnapshot = await getDocs(conversationQuery);

  // Only create a conversation if one doesn't exist already.
  if (querySnapshot.empty) {
    const conversationData = {
      startDate: new Date(),
      users: userMap,
    };
    const conversationDoc = await createDoc(
      ["conversations"],
      conversationData
    );
    const userConversationData = {
      active: true,
    };
    const conversationPath = (id) => ["users", id, "conversations"];
    ids.forEach(
      async (id) =>
        await createDoc(
          conversationPath(id),
          userConversationData,
          conversationDoc.id
        )
    );
  }
}
