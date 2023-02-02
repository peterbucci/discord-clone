import React, { useEffect, useState } from "react";
import Channel from "components/Channel";
import sameDay from "helpers/same_day";
import { useStateValue } from "providers/StateProvider";
import Head from "./Head";
import ProfilePanel from "fragments/ProfilePanel";
import Message from "../Message";
import MessageSender from "fragments/MessageSender";

export default function Body({
  conversationRef,
  recipientId,
  conversationId,
  setLayerDetails,
}) {
  const [replyToMessage, setReplyToMessage] = useState(null);
  const [messageToEdit, setMessageToEdit] = useState(null);
  const {
    state: { messages, users, user },
  } = useStateValue();
  const sender = users[user];
  const conversationMessages = messages[conversationId]
    ? Object.values(messages[conversationId])
    : [];

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMessageToEdit(null);
    };
    if (messageToEdit) {
      document.addEventListener("keydown", onKeyDown);
    }
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [messageToEdit]);

  return (
    <Channel.RightBody>
      <Channel.RightMainWrapper>
        <Channel.RightMain ref={conversationRef}>
          <Channel.Conversation>
            <Head recipientId={recipientId} />
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
                      id={id}
                      prevPost={arr[idx - 1]}
                      edit={messageToEdit === id}
                      conversationId={conversationId}
                      setEdit={setMessageToEdit}
                      setReplyToMessage={setReplyToMessage}
                      setLayerDetails={setLayerDetails}
                    />
                  </React.Fragment>
                );
              }
            )}
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
      {!sender.hideUserProfile && <ProfilePanel id={recipientId} />}
    </Channel.RightBody>
  );
}
