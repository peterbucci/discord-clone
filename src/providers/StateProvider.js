import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
  useRef,
} from "react";
import reducer from "../reducers/state_reducer";
import {
  getChannelsSnapshot,
  getConversationsSnapshot,
  getFriendsSnapshot,
  getUserSnapshot,
} from "../api/get_snapshots";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const unsubscribersRef = useRef({});
  const initialRenderRef = useRef(true);
  const [friendCount, setFriendCount] = useState(-1);
  const [conversationCount, setConversationCount] = useState(-1);
  const [channelCount, setChannelCount] = useState(-1);
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    users: {},
    friends: [],
    conversations: {},
    activeConversations: [],
    messages: {},
    pendingRequests: {},
    blocked: {},
    channels: {},
    userSettings: {
      enableSettings: false,
      enableMicrophone: true,
      enableHeadphones: true,
    },
    friendsListTab: "Online",
  });

  useEffect(() => {
    const unsubscribers = unsubscribersRef.current;
    return () => {
      Object.values(unsubscribers).forEach((unsubscribe) => unsubscribe());
    };
  }, []);

  useEffect(() => {
    const unsubscribers = unsubscribersRef.current;
    if (state.user) {
      const unsubscribeFriends = getFriendsSnapshot(
        state.user,
        unsubscribers,
        dispatch,
        setFriendCount
      );
      const unsubscribeConversations = getConversationsSnapshot(
        state.user,
        unsubscribers,
        dispatch,
        setConversationCount
      );
      const unsubscribeChannels = getChannelsSnapshot(
        state.user,
        unsubscribers,
        dispatch,
        setChannelCount
      );

      return () => {
        unsubscribeFriends();
        unsubscribeConversations();
        unsubscribeChannels();
      };
    }
  }, [state.user]);

  useEffect(() => {
    const initialRender = initialRenderRef.current;
    if (initialRender) {
      const unsubscribeUser = getUserSnapshot(dispatch);
      initialRenderRef.current = false;
      return () => {
        initialRenderRef.current = true;
        unsubscribeUser();
      };
    }
  }, []);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {state.user &&
      friendCount === state.friends.length &&
      conversationCount === Object.values(state.conversations).length &&
      channelCount === Object.values(state.channels).length ? (
        children
      ) : (
        <></>
      )}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
