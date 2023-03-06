import { default as NewMessage } from "components/Message";
import MessageSender from "fragments/MessageSender";
import sameDay from "helpers/same_day";
import { useStateValue } from "providers/StateProvider";
import * as Icons from "assets/icons";
import formatTimestamp from "./format_timestamp";
import formatText from "./format_text";
import Head from "./Head";
import Reply from "./Reply";

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
  setReplyToMessage,
}) {
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

  return (
    <NewMessage edit={edit} padding={!renderHeader()}>
      <NewMessage.Wrapper margin={renderHeader()}>
        {renderHeader() ? (
          <>
            {reply && (
              <Reply
                replyMessageSender={replyMessageSender}
                replyMessage={replyMessage}
                edited={edited}
              />
            )}
            <Head sender={sender} timestamp={timestamp} />
          </>
        ) : (
          <NewMessage.Timestamp className="newMessageTimestamp" edit={edit}>
            {formatTimestamp(timestamp, true)}
          </NewMessage.Timestamp>
        )}
        {edit ? (
          <MessageSender messageId={id} setEdit={setEdit} />
        ) : (
          <NewMessage.Text>{formatText(nodes, edited)}</NewMessage.Text>
        )}
        {!edit && (
          <NewMessage.Buttons id="newMessageButtons" isHeader={renderHeader()}>
            <NewMessage.Button>
              <Icons.Reaction />
            </NewMessage.Button>
            {sender.id === user ? (
              <NewMessage.Button onClick={() => setEdit(id)}>
                <Icons.Edit />
              </NewMessage.Button>
            ) : (
              <NewMessage.Button onClick={() => setReplyToMessage(id)}>
                <Icons.Reply />
              </NewMessage.Button>
            )}
            <NewMessage.Button>
              <Icons.More />
            </NewMessage.Button>
          </NewMessage.Buttons>
        )}
      </NewMessage.Wrapper>
    </NewMessage>
  );
}
