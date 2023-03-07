import createDoc from "helpers/create_doc";

/**
 * @description Create a document in the category's subcollection.
 *
 * @param {string} name - name of the channel being created
 * @param {string} serverId - ID of the server the channel is being added to.
 * @param {string} categoryId - ID of the category the channel is being added to.
 * @param {string} type - type of channel (text or voice)
 * @param {number} order - number indicated the order in which the channel should
 *      appear in the server sidebar.
 */

export async function createChannel(name, serverId, categoryId, type, order) {
  const channelData = {
    name,
    type,
    category: categoryId,
    order,
  };

  await createDoc(
    ["servers", serverId, "categories", categoryId, "channels"],
    channelData
  );
}
