import { default as NewReplyTo } from "../../components/MessageSender/ReplyTo";
import { useStateValue } from "../../providers/StateProvider";
import CloseIcon from "./icons/close";

export default function ReplyTo({
  replyToMessage,
  setReplyToMessage,
  conversationId,
}) {
  const {
    state: { messages, users },
  } = useStateValue();
  const message = messages[conversationId][replyToMessage];
  const sender = users[message.sender];
  return (
    <NewReplyTo>
      <NewReplyTo.Button>
        <NewReplyTo.ButtonText>
          Reply To <NewReplyTo.Recipient>{sender.name}</NewReplyTo.Recipient>
        </NewReplyTo.ButtonText>
      </NewReplyTo.Button>
      <NewReplyTo.Actions>
        <NewReplyTo.CloseButton onClick={() => setReplyToMessage(null)}>
          <CloseIcon />
        </NewReplyTo.CloseButton>
      </NewReplyTo.Actions>
    </NewReplyTo>
  );
}
