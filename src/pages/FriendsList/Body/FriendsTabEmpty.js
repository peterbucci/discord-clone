import FriendsListBody from "components/FriendsList/Body";
import { useStateValue } from "providers/StateProvider";

const BACKGROUNDS = {
  Online: {
    image: "/assets/empty_friends_list/online.svg",
    text: "No one's around to play with Wumpus.",
    width: "421px",
    height: "218px",
  },
  "All Friends": {
    image: "/assets/empty_friends_list/all.svg",
    text: "Wumpus is waiting on friends. You don’t have to though!",
    width: "376px",
    height: "162px",
  },
  Pending: {
    image: "/assets/empty_friends_list/pending.svg",
    text: "There are no pending friend requests. Here's Wumpus for now.",
    width: "415px",
    height: "200px",
  },
  Blocked: {
    image: "/assets/empty_friends_list/blocked.svg",
    text: "You can't unblock the Wumpus.",
    width: "433px",
    height: "232px",
  },
};

export default function FriendsTabEmpty() {
  const {
    state: { friendsListTab },
  } = useStateValue();
  const background = BACKGROUNDS[friendsListTab];
  return (
    <FriendsListBody>
      <FriendsListBody.Empty>
        <FriendsListBody.EmptyImage
          image={background.image}
          maxWidth={background.width}
          maxHeight={background.height}
        ></FriendsListBody.EmptyImage>
        <FriendsListBody.EmptyText>{background.text}</FriendsListBody.EmptyText>
      </FriendsListBody.Empty>
    </FriendsListBody>
  );
}
