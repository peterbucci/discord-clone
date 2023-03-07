import createDoc from "helpers/create_doc";

/**
 *
 * @param {string} userId - ID of the current user
 * @param {object} updates - contains the data to be updated
 */

export default async function updateUser(userId, updates) {
  await createDoc(["users"], updates, userId);
}
