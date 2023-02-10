import React, { useRef, useState } from "react";
import Channel from "components/Channel";
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
    <Channel.RightBody>
      <Channel.RightMainWrapper>
        <Channel.RightMain ref={conversationRef}>
          <Channel.Conversation>
            <Head recipientId={recipientId} />
            <MessageList
              conversationId={conversationId}
              containerRef={conversationRef}
              setReplyToMessage={setReplyToMessage}
            />
            <Channel.ConversationSpacer />
          </Channel.Conversation>
        </Channel.RightMain>
        <Channel.RightMainFooter>
          <MessageSender
            replyToMessage={replyToMessage}
            setReplyToMessage={setReplyToMessage}
          />
        </Channel.RightMainFooter>
      </Channel.RightMainWrapper>
      {!users[user].hideUserProfile && <ProfilePanel id={recipientId} />}
    </Channel.RightBody>
  );
}
