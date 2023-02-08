import createDoc from "helpers/create_doc";

export default function updateUser(userId, updates) {
  createDoc(["users"], updates, userId);
}
