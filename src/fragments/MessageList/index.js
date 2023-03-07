import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import MessageListLayout from "components/MessageList";
import Message from "./Message";
import { useStateValue } from "providers/StateProvider";
import getMessagesSnapshot from "api/snapshots/get_messages";
import getMoreMessagesSnapshot from "api/snapshots/get_more_messages";
import sameDay from "helpers/same_day";
import { useParams } from "react-router";

export default function MessageList({
  conversationId,
  containerRef,
  setReplyToMessage,
  fetching,
  setFetching,
}) {
  const {
    dispatch,
    state: { messages, users, queryCursors, unsubscribers },
  } = useStateValue();
  const listener = unsubscribers[conversationId + "messages"];
  const queryCursorRefs = useRef({});
  const [initialRender, setInitialRender] = useState(!listener);
  const [messageToEdit, setMessageToEdit] = useState(null);
  const start = queryCursors[conversationId];

  const conversation = messages[conversationId];
  const messagesToRender = conversation
    ? Object.values(conversation).sort((a, b) =>
        a.timestamp < b.timestamp ? -1 : 1
      )
    : [];

  const requestMessages = useCallback(
    async (cursorKey, addConditions) => {
      const cursors = queryCursorRefs.current;

      if (!cursors[conversationId]) cursors[conversationId] = {};
      if (
        !fetching &&
        cursors[conversationId][cursorKey] !== null &&
        addConditions
      ) {
        cursors[conversationId][cursorKey] = null;
        setFetching(true);
        if (cursorKey === "0")
          await getMessagesSnapshot(conversationId, dispatch, setInitialRender);
        else await getMoreMessagesSnapshot(conversationId, dispatch, start);
        setFetching(false);
      }
    },
    [conversationId, dispatch, fetching, setFetching, start]
  );

  useEffect(() => {
    requestMessages("0", !listener);
  }, [listener, requestMessages]);

  const onScroll = useCallback(
    (e) => {
      requestMessages(start?.id, e.target.scrollTop <= 1000 && start);
    },
    [start, requestMessages]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", onScroll);
      return () => container.removeEventListener("scroll", onScroll);
    }
  }, [containerRef, onScroll]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, containerRef]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (container && !initialRender) {
      container.scrollTo(0, container.scrollHeight);
    }
  }, [conversationId, containerRef, initialRender]);

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
      <MessageListLayout key={id}>
        {(!prevDate || !sameDay(date, prevDate)) && (
          <MessageListLayout.DailyDivider>
            {date.toLocaleString("default", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </MessageListLayout.DailyDivider>
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
      </MessageListLayout>
    );
  });
}
