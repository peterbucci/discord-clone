import { db } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";

export default function createDoc(collectionPath, data, id) {
  const newDoc = id
    ? doc(collection(db, ...collectionPath), id)
    : doc(collection(db, ...collectionPath));

  setDoc(
    newDoc,
    {
      id: newDoc.id,
      ...data,
    },
    { merge: true }
  );

  return newDoc;
}
