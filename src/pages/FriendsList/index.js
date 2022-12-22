import Channel from "../../components/Channel";
import ConversationList from "../../fragments/ConversationList";
import ActiveNowSidebar from "../../fragments/ActiveNowSidebar";
import Head from "./Head";
import Body from "./Body";

export default function FriendsList() {
  return (
    <Channel>
      <ConversationList />
      <Channel.Right>
        <Channel.RightHead>
          <Head />
        </Channel.RightHead>
        <Channel.RightBody>
          <Body />
          <ActiveNowSidebar />
        </Channel.RightBody>
      </Channel.Right>
    </Channel>
  );
}
