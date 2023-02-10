import Message from "components/Message";
import ProfilePanel from "fragments/ProfilePanel";
import Tooltip from "fragments/Tooltip";
import formatText from "./format_text";

export default function Reply({ replyMessageSender, replyMessage, edited }) {
  return (
    <Message.Reply>
      <Tooltip placement="right" offset={[0, 8]}>
        <Message.ReplyAvatar
          image={
            replyMessageSender.avatar ??
            `default_avatars/${replyMessageSender.tag % 6}`
          }
        />
        <ProfilePanel id={replyMessageSender.id} absolutePosition={true} />
      </Tooltip>
      <Tooltip placement="right" offset={[0, 8]}>
        <Message.OriginalSender>
          @{replyMessageSender.name}
        </Message.OriginalSender>
        <ProfilePanel id={replyMessageSender.id} absolutePosition={true} />
      </Tooltip>
      <Message.OriginalMessage>
        {formatText(replyMessage.nodes, edited)}
      </Message.OriginalMessage>
    </Message.Reply>
  );
}
