import createDoc from "helpers/create_doc";

/**
 * @description Add a document to the user's server subcollection.
 *
 * @param {string} userId - id of the user joining the server
 * @param {string} serverId - id of the server
 * @returns
 */

export async function joinServer(userId, serverId) {
  return await createDoc(
    ["users", userId, "servers"],
    { id: serverId },
    serverId
  );
}
