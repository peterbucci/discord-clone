import { doc, query, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function updateUser(userId, updates) {
  const q = query(doc(db, "users", userId));
  setDoc(q, updates, { merge: true });
}
