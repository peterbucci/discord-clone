import addFriend from "../../api/add_friend";
import deleteFriend from "../../api/delete_friend";
import deleteFriendRequest from "../../api/delete_friend_request";
import sendFriendRequest from "../../api/send_friend_request";
import ConversationHead from "../../components/ConversationHead";
import { useStateValue } from "../../providers/StateProvider";

export default function Head({ recipientId }) {
  const {
    state: { user, users, friends, friendRequests },
  } = useStateValue();
  const recipient = users[recipientId] ?? {};
  const isFriend = friends[recipientId];
  const friendRequest = friendRequests[recipientId];
  return (
    <ConversationHead>
      <ConversationHead.Avatar
        image={recipient.avatar ?? `default_avatars/${recipient.tag % 6}`}
      />
      <ConversationHead.Username>{recipient.name}</ConversationHead.Username>
      <ConversationHead.Description>
        This is the beginning of your direct message history with{" "}
        <ConversationHead.Strong>@{recipient.name}</ConversationHead.Strong>
        <ConversationHead.Toolbar>
          <ConversationHead.NoServers>
            No servers in common
          </ConversationHead.NoServers>
          <ConversationHead.Divider />
          {isFriend ? (
            <ConversationHead.Button
              onClick={() => deleteFriend(user, recipientId)}
            >
              Remove Friend
            </ConversationHead.Button>
          ) : friendRequest ? (
            friendRequest.sender === user ? (
              <ConversationHead.Button altBackground={true} disabled={true}>
                Friend Request Sent
              </ConversationHead.Button>
            ) : (
              <>
                <ConversationHead.FriendRequestSent>
                  Sent you a friend request:
                </ConversationHead.FriendRequestSent>
                <ConversationHead.Button
                  altBackground={true}
                  onClick={() => addFriend(user, recipientId)}
                >
                  Accept
                </ConversationHead.Button>
                <ConversationHead.Button
                  onClick={() => deleteFriendRequest(recipientId, user)}
                >
                  Ignore
                </ConversationHead.Button>
              </>
            )
          ) : (
            <ConversationHead.Button
              onClick={() => sendFriendRequest(user, recipientId)}
            >
              Add Friend
            </ConversationHead.Button>
          )}
          <ConversationHead.Button>Block</ConversationHead.Button>
        </ConversationHead.Toolbar>
      </ConversationHead.Description>
    </ConversationHead>
  );
}
