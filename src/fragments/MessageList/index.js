import Channel from "components/Channel";
import sameDay from "helpers/same_day";
import { useStateValue } from "providers/StateProvider";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Message from "./Message";

export default function MessageList({
  conversationId,
  containerRef,
  setReplyToMessage,
}) {
  const [messageToEdit, setMessageToEdit] = useState(null);
  const {
    state: { messages, users },
  } = useStateValue();
  const messagesToRender = messages[conversationId]
    ? Object.values(messages[conversationId])
    : [];

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo(0, container.scrollHeight);
    }
  }, [conversationId, containerRef]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMessageToEdit(null);
    };
    if (messageToEdit) {
      document.addEventListener("keydown", onKeyDown);
    }
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [messageToEdit]);

  return messagesToRender.map(({ sender, id, ...message }, idx, arr) => {
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
        />
      </React.Fragment>
    );
  });
}
