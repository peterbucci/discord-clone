import React, { useEffect, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import { default as Layout } from "components/Layout";
import Body from "./Body";
import Head from "./Head";
import ConversationSidebar from "fragments/ConversationSidebar";
import updateActiveConversations from "api/update_active_conversations";
import { useStateValue } from "providers/StateProvider";

export default function Conversation() {
  const {
    state: { user, users, conversations },
  } = useStateValue();
  const conversationRef = useRef(null);
  const params = useParams();
  const conversationId = params.conversationId;
  const conversation = conversations[conversationId];

  const sender = users[user];
  const recipientId = conversation
    ? Object.keys(conversation.users).find((id) => id !== user)
    : null;
  const recipient = users[recipientId];

  useEffect(() => {
    if (conversation) {
      updateActiveConversations(user, conversationId, true);
    }
  }, [conversation, conversationId, user]);

  return conversation ? (
    <Layout>
      <ConversationSidebar />
      <Layout.Right>
        <Head sender={sender} recipient={recipient} />
        <Body
          conversationRef={conversationRef}
          recipientId={recipientId}
          conversationId={conversationId}
        />
      </Layout.Right>
    </Layout>
  ) : (
    <Navigate to="/channels/@me" />
  );
}
