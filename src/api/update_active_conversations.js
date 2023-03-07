import createDoc from "helpers/create_doc";

/**
 * @description Update the document in the current user's conversation subcollection
 *    and update the active key to the value of isActive.
 *
 * @param {string} userId - ID of the current user
 * @param {string} conversationId - ID of the current conversation
 * @param {boolean} isActive - a boolean that indicates whether the conversation
 *    should be set to active or not.
 */

export default function updateActiveConversations(
  userId,
  conversationId,
  isActive
) {
  createDoc(
    ["users", userId, "conversations"],
    { active: isActive },
    conversationId
  );
}
