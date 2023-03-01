import { db } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";

export default async function createDoc(collectionPath, data, id) {
  const newDoc = id
    ? doc(collection(db, ...collectionPath), id)
    : doc(collection(db, ...collectionPath));
  try {
    await setDoc(
      newDoc,
      {
        id: newDoc.id,
        ...data,
      },
      { merge: true }
    );
  } catch (e) {
    console.error(e); // handle your error here
  } finally {
    console.log("Cleanup here"); // cleanup, always executed
    return newDoc;
  }
}
