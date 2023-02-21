import React, { useRef, useState } from "react";
import Layout from "components/Layout";
import { useStateValue } from "providers/StateProvider";
import Head from "./Head";
import ProfilePanel from "fragments/ProfilePanel";
import MessageSender from "fragments/MessageSender";
import MessageList from "fragments/MessageList";

export default function Body({ recipientId, conversationId }) {
  const conversationRef = useRef(null);
  const [replyToMessage, setReplyToMessage] = useState(null);
  const {
    state: { users, user },
  } = useStateValue();

  return (
    <Layout.RightBody>
      <Layout.RightMainWrapper>
        <Layout.RightMain ref={conversationRef}>
          <Layout.Conversation>
            <Head recipientId={recipientId} />
            <MessageList
              conversationId={conversationId}
              containerRef={conversationRef}
              setReplyToMessage={setReplyToMessage}
            />
            <Layout.ConversationSpacer />
          </Layout.Conversation>
        </Layout.RightMain>
        <Layout.RightMainFooter>
          <MessageSender
            replyToMessage={replyToMessage}
            setReplyToMessage={setReplyToMessage}
          />
        </Layout.RightMainFooter>
      </Layout.RightMainWrapper>
      {!users[user].hideUserProfile && <ProfilePanel id={recipientId} />}
    </Layout.RightBody>
  );
}
