import createDoc from "helpers/create_doc";

/**
 * @description Create a document in the server's category subcollection.
 *
 * @param {string} name - name of the category being created
 * @param {string} serverId - ID of the server the category is being added to.
 * @param {number} order - number indicated the order in which the category should
 *      appear in the server sidebar.
 * @returns reference to the newly created firebase document
 */

export async function createCategory(name, serverId, order) {
  const categoryData = {
    name,
    server: serverId,
    order,
  };
  return await createDoc(["servers", serverId, "categories"], categoryData);
}
