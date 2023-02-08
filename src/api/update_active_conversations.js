import createDoc from "helpers/create_doc";

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
