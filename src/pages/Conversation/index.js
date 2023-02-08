import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import updateActiveConversations from "../../api/update_active_conversations";
import Channel from "../../components/Channel";
import ConversationList from "../../fragments/ConversationList";
import { useStateValue } from "../../providers/StateProvider";
import ProfilePanel from "../../fragments/ProfilePanel";
import LayerContainer from "../../fragments/LayerContainer";
import Body from "./Body";
import Head from "./Head";

export default function Conversation() {
  const profilePanelRef = useRef(null);
  const [layerDetails, setLayerDetails] = useState(null);
  const {
    state: { user, users, conversations, messages },
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

  useLayoutEffect(() => {
    const conversationContainer = conversationRef.current;
    if (conversationContainer) {
      conversationContainer.scrollTo(0, conversationContainer.scrollHeight);
    }
  }, [messages]);

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
          setLayerDetails={setLayerDetails}
        />
      </Channel.Right>
      <LayerContainer
        anchorRef={layerDetails?.anchorRef}
        onClickOut={setLayerDetails}
      >
        <ProfilePanel
          thisRef={profilePanelRef}
          id={layerDetails?.userId}
          absolutePosition={true}
        />
      </LayerContainer>
    </Channel>
  ) : (
    <Navigate to="/channels/@me" />
  );
}
