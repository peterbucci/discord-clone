import Message from "components/Message";
import formatTimestamp from "./format_timestamp";
import Tooltip from "fragments/Tooltip";
import ProfilePanel from "fragments/ProfilePanel";

export default function Head({ sender, timestamp }) {
  return (
    <Message.Content>
      <Tooltip placement="right" offset={[0, 8]}>
        <Message.Avatar
          image={sender.avatar ?? `default_avatars/${sender.tag % 6}`}
        />
        <ProfilePanel id={sender.id} absolutePosition={true} />
      </Tooltip>
      <Message.Header>
        <Tooltip placement="right" offset={[0, 8]}>
          <Message.HeaderSpan>{sender.name}</Message.HeaderSpan>
          <ProfilePanel id={sender.id} absolutePosition={true} />
        </Tooltip>
        <Message.HeaderSpan>{formatTimestamp(timestamp)}</Message.HeaderSpan>
      </Message.Header>
    </Message.Content>
  );
}
