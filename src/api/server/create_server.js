import { createCategory } from "./create_category";
import { createChannel } from "./create_channel";
import { joinServer } from "./join_server";
import createDoc from "helpers/create_doc";

/**
 * @description Create a document in the server collection and use the template
 *    data to create any requested categories and channels in their subcollections.
 *    Then join the server by adding a document to the user's server subcollection.
 *
 * @param {string} serverName - name of the created server
 * @param {object} template - template for building the categories and channels of
 *    the server
 * @param {string} userId - id of user creating the server
 */

export default async function createServer(serverName, template, userId) {
  const { categories } = template;
  const serverData = {
    name: serverName,
    tag: serverName
      .split(" ")
      .map((w) => w.charAt(0))
      .join(""),
  };
  const serverDoc = await createDoc(["servers"], serverData);
  categories.forEach((category, i) =>
    createCategory(category.name, serverDoc.id, i).then((doc) =>
      category.channels.forEach((channel, j) => {
        createChannel(channel.name, serverDoc.id, doc.id, channel.type, j);
      })
    )
  );
  return await joinServer(userId, serverDoc.id);
}
