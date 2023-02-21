import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import reducer from "reducers/state_reducer";
import Loading from "pages/Loading";
import defaultState from "assets/default_state";
// Snapshots
import onAuthChange from "api/on_auth_change";
import getUserSnapshot from "api/snapshots/get_user";
import getFriendsSnapshot from "api/snapshots/get_friends";
import getFriendRequestsSnapshot from "api/snapshots/get_friend_requests";
import getNotesSnapshot from "api/snapshots/get_notes";
import getConversationsSnapshot from "api/snapshots/get_conversations";
import getServersSnapshot from "api/snapshots/get_servers";
import onlinePresence from "api/online_presence";

const StateContext = createContext();
export const StateProvider = ({ children }) => {
  const onAuthChangeUnsub = useRef(null);
  const [friendCount, setFriendCount] = useState(-1);
  const [conversationCount, setConversationCount] = useState(-1);
  const [serverCount, setServerCount] = useState(-1);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const dataLoaded = useCallback(() => {
    return (
      state.user &&
      friendCount === Object.keys(state.friends).length &&
      conversationCount === Object.values(state.conversations).length &&
      serverCount === Object.values(state.servers).length
    );
  }, [conversationCount, friendCount, serverCount, state]);

  useEffect(() => {
    if (!onAuthChangeUnsub.current) {
      onAuthChangeUnsub.current = onAuthChange(
        dispatch,
        setServerCount,
        setConversationCount,
        setFriendCount,
        state.unsubscribers
      );
    }
  }, [state.unsubscribers]);

  useEffect(() => {
    if (state.uid && !state.unsubscribers.user)
      getUserSnapshot(dispatch, state.uid);
  }, [state.uid, state.unsubscribers]);

  useEffect(() => {
    if (state.user && !state.unsubscribers.onlinePresence)
      onlinePresence(state.user, dispatch);
  });

  useEffect(() => {
    if (state.user && !state.unsubscribers.friends)
      getFriendsSnapshot(
        state.user,
        state.unsubscribers,
        dispatch,
        setFriendCount
      );
  }, [state.user, state.unsubscribers]);

  useEffect(() => {
    if (state.user && !state.unsubscribers.friendRequests)
      getFriendRequestsSnapshot(state.user, state.unsubscribers, dispatch);
  }, [state.user, state.unsubscribers]);

  useEffect(() => {
    if (state.user && !state.unsubscribers.notes)
      getNotesSnapshot(state.user, dispatch);
  }, [state.user, state.unsubscribers]);

  useEffect(() => {
    if (state.user && !state.unsubscribers.conversations)
      getConversationsSnapshot(
        state.user,
        state.unsubscribers,
        dispatch,
        setConversationCount
      );
  }, [state.user, state.unsubscribers]);

  useEffect(() => {
    if (state.user && !state.unsubscribers.servers)
      getServersSnapshot(
        state.user,
        state.unsubscribers,
        dispatch,
        setServerCount
      );
  }, [state.user, state.unsubscribers]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {dataLoaded() || (!state.initialRender && !state.uid) ? (
        children
      ) : (
        <Loading />
      )}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
