import { useParams, Navigate } from "react-router-dom";
import Channel from "../../components/Channel";
import ConversationList from "../../fragments/ConversationList";
import { useStateValue } from "../../providers/StateProvider";

export default function Conversation() {
  const {
    state: { conversations },
  } = useStateValue();
  const params = useParams();
  const conversationId = params.conversationId;
  const conversation = conversations[conversationId];

  return conversation ? (
    <Channel>
      <ConversationList />
      <Channel.Right>
        <Channel.RightHead>Right Head</Channel.RightHead>
        <Channel.RightBody>
          <Channel.RightMainWrapper>
            <Channel.RightMain>Chat</Channel.RightMain>
            <Channel.RightMainFooter>Chat Input</Channel.RightMainFooter>
          </Channel.RightMainWrapper>
          <Channel.RightSidebar>Right Sidebar</Channel.RightSidebar>
        </Channel.RightBody>
      </Channel.Right>
    </Channel>
  ) : (
    <Navigate to="/channels/@me" />
  );
}
