import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import updateActiveConversations from "../../api/update_active_conversations";
import Channel from "../../components/Channel";
import ActiveNowSidebar from "../../fragments/ActiveNowSidebar";
import ConversationList from "../../fragments/ConversationList";
import { useStateValue } from "../../providers/StateProvider";
import Message from "./Message";
import sameDay from "../../helpers/same_day";
import MessageSender from "../../fragments/MessageSender";

export default function Conversation() {
  const {
    state: { user, users, conversations, messages },
  } = useStateValue();
  const conversationRef = useRef(null);
  const params = useParams();
  const conversationId = params.conversationId;
  const conversation = conversations[conversationId];
  const conversationMessages = messages[conversationId]
    ? Object.values(messages[conversationId])
    : [];

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
        <Channel.RightHead>Right Head</Channel.RightHead>
        <Channel.RightBody>
          <Channel.RightMainWrapper>
            <Channel.RightMain ref={conversationRef}>
              <Channel.Conversation>
                {conversationMessages.map(
                  ({ sender, id, ...message }, idx, arr) => {
                    const date = message.timestamp.toDate();
                    const prevDate = arr[idx - 1]?.timestamp.toDate();
                    return (
                      <React.Fragment key={id}>
                        {(!prevDate || !sameDay(date, prevDate)) && (
                          <Channel.DailyDivider>
                            {date.toLocaleString("default", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </Channel.DailyDivider>
                        )}
                        <Message
                          {...message}
                          sender={users[sender]}
                          prevPost={arr[idx - 1]}
                        />
                      </React.Fragment>
                    );
                  }
                )}
                <Channel.ConversationSpacer />
              </Channel.Conversation>
            </Channel.RightMain>
            <Channel.RightMainFooter>
              <MessageSender />
            </Channel.RightMainFooter>
          </Channel.RightMainWrapper>
          <ActiveNowSidebar />
        </Channel.RightBody>
      </Channel.Right>
    </Channel>
  ) : (
    <Navigate to="/channels/@me" />
  );
}
