import { useState } from "react";
import FriendsListBody from "../../../components/FriendsListBody";
import { useStateValue } from "../../../providers/StateProvider";
import Avatar from "../../../fragments/Avatar";
import ClearSearchIcon from "../../../fragments/Icons/clear_search";
import SearchIcon from "../../../fragments/Icons/search";
import FriendsTabEmpty from "./FriendsTabEmpty";

export default function FriendsTab() {
  const [firstTextEntered, setFirstTextEntered] = useState(true);
  const [searchText, setSearchText] = useState("");
  const {
    state: {
      friendsListTab,
      user,
      users,
      friends,
      conversations,
      pendingRequests,
      blocked,
    },
  } = useStateValue();
  const listItems =
    friendsListTab === "Pending"
      ? Object.values(pendingRequests)
      : friendsListTab === "Blocked"
      ? Object.values(blocked)
      : Object.keys(friends);

  const itemCount =
    friendsListTab === "Online"
      ? listItems.filter((id) => users[id].status !== "Offline").length
      : listItems.length;

  return itemCount ? (
    <FriendsListBody>
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
        {friendsListTab} — {itemCount}
      </FriendsListBody.Head>
      <FriendsListBody.Main>
        <FriendsListBody.List>
          {listItems.map((id) => {
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
                key={id}
                visible={
                  !(friendsListTab === "Online" && friend.status === "Offline")
                }
                to={`/channels/@me/${conversation.id}`}
              >
                <FriendsListBody.AvatarWrapper>
                  <Avatar
                    status={friend.status}
                    image={friend.avatar ?? `default_avatars/${friend.tag % 6}`}
                  />
                </FriendsListBody.AvatarWrapper>
                <FriendsListBody.ListItemText>
                  <FriendsListBody.ListItemTextRow>
                    <FriendsListBody.ListItemTextSpan>
                      {friend.name}
                    </FriendsListBody.ListItemTextSpan>
                    <FriendsListBody.ListItemTextSpan tag={true}>
                      #{friend.tag}
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
    </FriendsListBody>
  ) : (
    <FriendsTabEmpty />
  );
}
