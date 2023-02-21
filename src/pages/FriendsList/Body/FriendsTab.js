import { useState } from "react";
import FriendsListBody from "components/FriendsList/Body";
import Friend from "./Friend";
import FriendRequest from "./FriendRequest";
import FriendsTabEmpty from "./FriendsTabEmpty";
import { useStateValue } from "providers/StateProvider";
import * as Icons from "assets/icons";

export default function FriendsTab() {
  const [firstTextEntered, setFirstTextEntered] = useState(true);
  const [searchText, setSearchText] = useState("");
  const {
    state: { friendsListTab, user, users, friends, friendRequests, blocked },
  } = useStateValue();
  const listItems =
    friendsListTab === "Pending"
      ? Object.keys(friendRequests)
      : friendsListTab === "Blocked"
      ? Object.keys(blocked)
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
            <Icons.Search />
          </FriendsListBody.IconWrapper>
          <FriendsListBody.IconWrapper
            className="clearSearch"
            visible={searchText.length > 0}
            animate={!firstTextEntered}
            onClick={() => setSearchText("")}
          >
            <Icons.ClearSearch />
          </FriendsListBody.IconWrapper>
        </FriendsListBody.SearchIcons>
      </FriendsListBody.Search>
      <FriendsListBody.Head>
        {friendsListTab} — {itemCount}
      </FriendsListBody.Head>
      <FriendsListBody.Main>
        <FriendsListBody.List>
          {listItems.map((id) => {
            return friendsListTab === "Online" ||
              friendsListTab === "All Friends" ? (
              <Friend key={id} id={id} />
            ) : friendsListTab === "Pending" ? (
              <FriendRequest
                key={id}
                id={id}
                outgoing={friendRequests[id].sender === user}
              />
            ) : (
              <div key={id}>Test</div>
            );
          })}
        </FriendsListBody.List>
      </FriendsListBody.Main>
    </FriendsListBody>
  ) : (
    <FriendsTabEmpty />
  );
}
