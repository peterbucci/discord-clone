import { default as NewReplyTo } from "../../components/MessageSender/ReplyTo";
import { useStateValue } from "../../providers/StateProvider";
import CloseIcon from "./icons/close";

export default function ReplyTo({
  messageToReply,
  setMessageToReply,
  conversationId,
}) {
  const {
    state: { messages, users },
  } = useStateValue();
  const message = messages[conversationId][messageToReply];
  const sender = users[message.sender];
  return (
    <NewReplyTo>
      <NewReplyTo.Button>
        <NewReplyTo.ButtonText>
          Reply To <NewReplyTo.Recipient>{sender.name}</NewReplyTo.Recipient>
        </NewReplyTo.ButtonText>
      </NewReplyTo.Button>
      <NewReplyTo.Actions>
        <NewReplyTo.CloseButton onClick={() => setMessageToReply(null)}>
          <CloseIcon />
        </NewReplyTo.CloseButton>
      </NewReplyTo.Actions>
    </NewReplyTo>
  );
}
