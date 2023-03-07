import { db } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";

/**
 * @description Get a reference to a document at the specified path. If
 *    it exists update it with provided data, otherwise create a new one.
 *
 * @param {array} collectionPath - path to the firebase collection
 * @param {object} data - data to be added to the document
 * @param {string} id - optional id to be used when creating document. Otherwise
 *    one is automatically generated.
 * @returns reference to the firebase document
 */

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
    console.error(e);
  } finally {
    console.log("Document created");
    return newDoc;
  }
}
