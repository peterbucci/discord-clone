import { doc, query, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function updateActiveConversations(
  userId,
  conversationId,
  isActive
) {
  const q = query(doc(db, "users", userId, "conversations", conversationId));
  setDoc(q, { active: isActive }, { merge: true });
}
