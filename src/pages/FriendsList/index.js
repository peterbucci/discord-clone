import { useState, useEffect } from "react";
import Channel from "../../components/Channel";
import FriendsListBody from "../../components/FriendsListBody";
import Avatar from "../../fragments/Avatar";
import ConversationList from "../../fragments/ConversationList";
import FriendsListHead from "../../fragments/FriendsListHead";
import ClearSearchIcon from "../../fragments/Icons/clear_search";
import SearchIcon from "../../fragments/Icons/search";
import { useStateValue } from "../../providers/StateProvider";

export default function FriendsList() {
  const [firstTextEntered, setFirstTextEntered] = useState(true);
  const [searchText, setSearchText] = useState("");
  const {
    state: { friendsListTab, user, users, conversations },
  } = useStateValue();
  const friends =
    friendsListTab === "Online"
      ? users[user].friends
      : friendsListTab === "Pending"
      ? users[user].pendingFriendRequests
      : friendsListTab === "Blocked"
      ? users[user].blocked
      : users[user].friends;

  const friendCount =
    friendsListTab === "Online"
      ? friends.filter((id) => users[id].status !== "Offline").length
      : friends.length;

  return (
    <Channel>
      <ConversationList />
      <Channel.Right>
        <Channel.RightHead>
          <FriendsListHead />
        </Channel.RightHead>
        <Channel.RightBody>
          <FriendsListBody>
            {friendsListTab === "Add Friend" ? (
              <div>Add Friend</div>
            ) : (
              <>
                <FriendsListBody.Search>
                  <FriendsListBody.Input
                    type="text"
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                      setFirstTextEntered(false);
                    }}
                  />
                  <FriendsListBody.SearchIcons queryLength={searchText.length}>
                    <FriendsListBody.IconWrapper
                      visible={searchText.length === 0}
                      animate={!firstTextEntered}
                    >
                      <SearchIcon />
                    </FriendsListBody.IconWrapper>
                    <FriendsListBody.IconWrapper
                      className="clearSearch"
                      visible={searchText.length > 0}
                      animate={!firstTextEntered}
                      onClick={() => setSearchText("")}
                    >
                      <ClearSearchIcon />
                    </FriendsListBody.IconWrapper>
                  </FriendsListBody.SearchIcons>
                </FriendsListBody.Search>
                <FriendsListBody.Head>
                  {friendsListTab} — {friendCount}
                </FriendsListBody.Head>
                <FriendsListBody.Main>
                  <FriendsListBody.List>
                    {friends.map((id) => {
                      const friend = users[id];
                      const conversation = Object.values(conversations).find(
                        (conversation) => {
                          return (
                            conversation.users &&
                            conversation.users.indexOf(id) > -1 &&
                            conversation.users.indexOf(user) > -1 &&
                            conversation.users.length === 2
                          );
                        }
                      );
                      return (
                        <FriendsListBody.ListItem
                          visible={
                            !(
                              friendsListTab === "Online" &&
                              friend.status === "Offline"
                            )
                          }
                          to={`/channels/@me/${conversation.id}`}
                        >
                          <FriendsListBody.AvatarWrapper>
                            <Avatar status={friend.status} />
                          </FriendsListBody.AvatarWrapper>
                          <FriendsListBody.ListItemText>
                            <FriendsListBody.ListItemTextRow>
                              <FriendsListBody.ListItemTextSpan>
                                {friend.name}
                              </FriendsListBody.ListItemTextSpan>
                              <FriendsListBody.ListItemTextSpan opacity="0">
                                #{id}
                              </FriendsListBody.ListItemTextSpan>
                            </FriendsListBody.ListItemTextRow>
                            <FriendsListBody.ListItemTextRow
                              fontSize="13px"
                              color="#B9BBBE"
                            >
                              {friend.status}
                            </FriendsListBody.ListItemTextRow>
                          </FriendsListBody.ListItemText>
                        </FriendsListBody.ListItem>
                      );
                    })}
                  </FriendsListBody.List>
                </FriendsListBody.Main>
              </>
            )}
          </FriendsListBody>
          <Channel.RightSidebar
            width="358px"
            margin="0 0 0 2px"
            padding="16px 8px 16px 16px"
            border="1px solid rgba(74, 84, 92, 0.48)"
            backgroundColor="#32353b"
          >
            Active Now
          </Channel.RightSidebar>
        </Channel.RightBody>
      </Channel.Right>
    </Channel>
  );
}
