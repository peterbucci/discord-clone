import React, { useRef, useState } from "react";
import Layout from "components/Layout";
import { useStateValue } from "providers/StateProvider";
import Head from "./Head";
import ProfilePanel from "fragments/ProfilePanel";
import MessageSender from "fragments/MessageSender";
import MessageList from "fragments/MessageList";
import FetchConvoPlaceholder from "fragments/FetchConvoPlaceholder";
import useWindowDimensions from "hooks/use_window_dimensions";

export default function Body({ recipientId, conversationId }) {
  const [fetching, setFetching] = useState(false);
  const conversationRef = useRef(null);
  const [replyToMessage, setReplyToMessage] = useState(null);
  const {
    state: { users, user, unsubscribers },
  } = useStateValue();
  const windowDimensions = useWindowDimensions();
  const disabledSidebar = windowDimensions.width < 1130;

  const listener = unsubscribers[conversationId + "messages"];

  return (
    <Layout.RightBody>
      <Layout.RightMainWrapper>
        <Layout.RightMain ref={conversationRef}>
          <Layout.Conversation>
            {fetching ? (
              <FetchConvoPlaceholder />
            ) : (
              listener && <Head recipientId={recipientId} />
            )}
            <MessageList
              conversationId={conversationId}
              containerRef={conversationRef}
              setReplyToMessage={setReplyToMessage}
              fetching={fetching}
              setFetching={setFetching}
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
      {!users[user].hideUserProfile ||
        (!disabledSidebar && <ProfilePanel id={recipientId} />)}
    </Layout.RightBody>
  );
}
