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
import getCurrentUserSnapshot from "api/snapshots/get_current_user";
import getFriendsSnapshot from "api/snapshots/get_friends";
import getFriendRequestsSnapshot from "api/snapshots/get_friend_requests";
import getNotesSnapshot from "api/snapshots/get_notes";
import getConversationsSnapshot from "api/snapshots/get_conversations";
import getServersSnapshot from "api/snapshots/get_servers";
import onlinePresence from "api/online_presence";

const StateContext = createContext();
export const StateProvider = ({ children }) => {
  const onAuthChangeUnsub = useRef(null);
  const [friendSnapshots, setFriendSnapshots] = useState(false);
  const [conversationSnapshots, setConversationSnapshots] = useState(false);
  const [serverSnapshots, setServerSnapshots] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const dataLoaded = useCallback(() => {
    return (
      state.user && friendSnapshots && conversationSnapshots && serverSnapshots
    );
  }, [conversationSnapshots, friendSnapshots, serverSnapshots, state]);

  useEffect(() => {
    if (!onAuthChangeUnsub.current) {
      onAuthChangeUnsub.current = onAuthChange(
        dispatch,
        setServerSnapshots,
        setConversationSnapshots,
        setFriendSnapshots,
        state.unsubscribers
      );
    }
  }, [state.unsubscribers]);

  useEffect(() => {
    if (state.uid && !state.unsubscribers.user)
      getCurrentUserSnapshot(dispatch, state.uid);
  }, [state.uid, state.unsubscribers]);

  useEffect(() => {
    if (state.user && !state.unsubscribers.onlinePresence)
      onlinePresence(state.user, dispatch);
  }, [state.user, state.unsubscribers.onlinePresence]);

  useEffect(() => {
    if (state.user && !state.unsubscribers.friends)
      getFriendsSnapshot(
        state.user,
        state.unsubscribers,
        dispatch,
        setFriendSnapshots
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
        setConversationSnapshots
      );
  }, [state.user, state.unsubscribers]);

  useEffect(() => {
    if (state.user && !state.unsubscribers.servers)
      getServersSnapshot(
        state.user,
        state.unsubscribers,
        dispatch,
        setServerSnapshots
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
