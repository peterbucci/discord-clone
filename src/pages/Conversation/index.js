import React, { useEffect, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import updateActiveConversations from "../../api/update_active_conversations";
import Channel from "../../components/Channel";
import ConversationList from "../../fragments/ConversationList";
import { useStateValue } from "../../providers/StateProvider";
import Body from "./Body";
import Head from "./Head";

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
    <Channel>
      <ConversationList />
      <Channel.Right>
        <Head sender={sender} recipient={recipient} />
        <Body
          conversationRef={conversationRef}
          recipientId={recipientId}
          conversationId={conversationId}
        />
      </Channel.Right>
    </Channel>
  ) : (
    <Navigate to="/channels/@me" />
  );
}
