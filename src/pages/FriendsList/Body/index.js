import { useStateValue } from "../../../providers/StateProvider";
import AddFriendsTab from "./AddFriendsTab";
import FriendsTab from "./FriendsTab";

export default function Body() {
  const {
    state: { friendsListTab },
  } = useStateValue();

  return friendsListTab === "Add Friend" ? <AddFriendsTab /> : <FriendsTab />;
}
