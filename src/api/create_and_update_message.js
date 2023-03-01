import { Editor, Transforms } from "slate";
import createDoc from "helpers/create_doc";

export default function createAndUpdateMessage(
  editor,
  initialValue,
  setEdit,
  serverId,
  conversationId,
  categoryId,
  replyToMessage,
  setReplyToMessage,
  message,
  user
) {
  if (editor.children.some((child) => !Editor.isEmpty(editor, child))) {
    const collectionPath = categoryId
      ? [
          "servers",
          serverId,
          "categories",
          categoryId,
          "channels",
          conversationId,
          "messages",
        ]
      : ["conversations", conversationId, "messages"];

    if (message) {
      createDoc(
        collectionPath,
        {
          nodes: editor.children,
          edited: new Date(),
        },
        message.id
      );
      setEdit(null);
    } else {
      createDoc(collectionPath, {
        sender: user,
        nodes: editor.children,
        timestamp: new Date(),
        reply: replyToMessage,
      });
      // Delete all entries leaving 1 empty node
      Transforms.delete(editor, {
        at: {
          anchor: Editor.start(editor, []),
          focus: Editor.end(editor, []),
        },
      });

      // Removes empty node
      Transforms.removeNodes(editor, {
        at: [0],
      });

      // Insert array of children nodes
      Transforms.insertNodes(editor, initialValue);
    }
    setReplyToMessage && setReplyToMessage(null);
  }
}
