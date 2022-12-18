import Channel from "../../components/Channel";
import ConversationList from "../../fragments/ConversationList";

export default function Store() {
  return (
    <Channel>
      <ConversationList />
      <Channel.Right>
        <Channel.RightHead>Right Head</Channel.RightHead>
        <Channel.RightBody>
          <Channel.RightMainWrapper>Store</Channel.RightMainWrapper>
        </Channel.RightBody>
      </Channel.Right>
    </Channel>
  );
}
