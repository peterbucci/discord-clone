import { useRef } from "react";
import { default as NewMessage } from "../../components/Message";
import MessageSender from "../../fragments/MessageSender";
import ReactionIcon from "../../fragments/Icons/reaction";
import sameDay from "../../helpers/same_day";
import EditIcon from "./icons/edit";
import MoreIcon from "./icons/more";
import { useStateValue } from "../../providers/StateProvider";
import ReplyIcon from "./icons/reply";

export default function Message({
  timestamp,
  nodes,
  sender,
  prevPost,
  id,
  reply,
  edit,
  conversationId,
  setEdit,
  edited,
  setMessageToReply,
  setLayerDetails,
}) {
  const senderAvatarRef = useRef(null);
  const replyAvatarRef = useRef(null);
  const {
    state: { user, messages, users },
  } = useStateValue();
  const replyMessage = messages[conversationId][reply];
  const replyMessageSender = replyMessage ? users[replyMessage.sender] : null;
  const renderHeader = () => {
    return (
      reply ||
      !prevPost ||
      prevPost.sender !== sender.id ||
      !sameDay(timestamp.toDate(), prevPost.timestamp.toDate())
    );
  };

  const formatTimestamp = (timestamp, onlyTime) => {
    // Today's date
    const today = new Date();
    // Input Date
    const date = timestamp.toDate();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    let dateString = `${(month < 10 ? "0" : "") + month}/${
      (day < 10 ? "0" : "") + day
    }/${year} `;
    if (onlyTime) {
      dateString = "";
    } else if (sameDay(date, today)) {
      dateString = "Today at ";
    } else if (sameDay(date, today, true)) {
      dateString = "Yesterday at ";
    }
    return `${dateString}${date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  const formatText = (nodes) => {
    return nodes.map((node, idx, arr) => {
      return node.type === "paragraph" ? (
        <NewMessage.Paragraph key={idx}>
          {node.children && formatText(node.children)}
          {idx === arr.length - 1 && edited && (
            <NewMessage.EditedTimestamp>
              {" "}
              (edited)
              <NewMessage.EditedTimestampHover>
                {edited.toDate().toLocaleString("default", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                {edited.toDate().toLocaleString("default", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </NewMessage.EditedTimestampHover>
            </NewMessage.EditedTimestamp>
          )}
        </NewMessage.Paragraph>
      ) : (
        <NewMessage.Leaf
          key={idx}
          style={{
            fontWeight: node.bold ? "500" : "normal",
            fontStyle: node.italic ? "oblique" : "normal",
            textDecoration: node.lineThrough ? "line-through" : "none",
          }}
        >
          {node.text}
        </NewMessage.Leaf>
      );
    });
  };

  return (
    <NewMessage edit={edit}>
      <NewMessage.Wrapper margin={renderHeader()}>
        {renderHeader() ? (
          <>
            {reply && (
              <NewMessage.Reply>
                <NewMessage.ReplyAvatar
                  ref={replyAvatarRef}
                  onClick={() =>
                    setLayerDetails({
                      anchorRef: replyAvatarRef,
                      userId: replyMessageSender.id,
                    })
                  }
                  image={
                    replyMessageSender.avatar ??
                    `default_avatars/${replyMessageSender.tag % 6}`
                  }
                />{" "}
                <NewMessage.OriginalSender>
                  @{replyMessageSender.name}
                </NewMessage.OriginalSender>
                <NewMessage.OriginalMessage>
                  {formatText(replyMessage.nodes)}
                </NewMessage.OriginalMessage>
              </NewMessage.Reply>
            )}
            <NewMessage.Content>
              <NewMessage.Avatar
                ref={senderAvatarRef}
                onClick={() =>
                  setLayerDetails({
                    anchorRef: senderAvatarRef,
                    userId: sender.id,
                  })
                }
                image={sender.avatar ?? `default_avatars/${sender.tag % 6}`}
              />
              <NewMessage.Header>
                <NewMessage.HeaderSpan>{sender.name}</NewMessage.HeaderSpan>
                <NewMessage.HeaderSpan>
                  {formatTimestamp(timestamp)}
                </NewMessage.HeaderSpan>
              </NewMessage.Header>
            </NewMessage.Content>
          </>
        ) : (
          <NewMessage.Timestamp className="newMessageTimestamp" edit={edit}>
            {formatTimestamp(timestamp, true)}
          </NewMessage.Timestamp>
        )}
        {edit ? (
          <MessageSender
            editMessageLayout={true}
            value={nodes}
            id={id}
            setEdit={setEdit}
          />
        ) : (
          <NewMessage.Text>{formatText(nodes)}</NewMessage.Text>
        )}
        {!edit && (
          <NewMessage.Buttons id="newMessageButtons" isHeader={renderHeader()}>
            <NewMessage.Button>
              <ReactionIcon />
            </NewMessage.Button>
            {sender.id === user ? (
              <NewMessage.Button onClick={() => setEdit(id)}>
                <EditIcon />
              </NewMessage.Button>
            ) : (
              <NewMessage.Button onClick={() => setMessageToReply(id)}>
                <ReplyIcon />
              </NewMessage.Button>
            )}
            <NewMessage.Button>
              <MoreIcon />
            </NewMessage.Button>
          </NewMessage.Buttons>
        )}
      </NewMessage.Wrapper>
    </NewMessage>
  );
}
