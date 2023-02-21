import createDoc from "helpers/create_doc";

export default async function updateUser(userId, updates) {
  return await createDoc(["users"], updates, userId);
}
