import createDoc from "helpers/create_doc";

/**
 * @description If message document exists update current message with edited timestamp,
 *    otherwise create a new document.
 *
 * @param {array} collectionPath - path to the firebase collection
 * @param {string} sender - id of the user sending the message
 * @param {array} nodes - an array of objects representing the message being sent
 * @param {string} [replyToMessage] - (optional) id of the message being responding to
 * @param {string} [messageId] - (optional) id of the current message being edited
 */

export default function createAndUpdateMessage(
  collectionPath,
  sender,
  nodes,
  replyToMessage,
  messageId
) {
  if (messageId) {
    createDoc(
      collectionPath,
      {
        nodes,
        edited: new Date(),
      },
      messageId
    );
  } else {
    createDoc(collectionPath, {
      sender,
      nodes,
      timestamp: new Date(),
      reply: replyToMessage,
    });
  }
}
