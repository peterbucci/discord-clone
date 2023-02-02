import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
  useRef,
} from "react";
import reducer from "reducers/state_reducer";
import {
  getChannelsSnapshot,
  getConversationsSnapshot,
  getFriendsSnapshot,
  getNotesSnapshot,
  getUserSnapshot,
} from "api/get_snapshots";
import onAuthChange from "../api/on_auth_change";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "firebase.js";
import Loading from "pages/Loading";
import { getFriendRequestsSnapshot } from "../api/get_snapshots";
import { ThemeProvider } from "styled-components";
import darkTheme from "themes/dark";
const provider = new GoogleAuthProvider();

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const unsubscribersRef = useRef({});
  const onAuthChangeUnsub = useRef(null);
  const initialRenderRef = useRef(true);
  const [friendCount, setFriendCount] = useState(-1);
  const [conversationCount, setConversationCount] = useState(-1);
  const [channelCount, setChannelCount] = useState(-1);
  const [state, dispatch] = useReducer(reducer, {
    uid: null,
    user: null,
    users: {},
    friends: {},
    notes: {},
    conversations: {},
    activeConversations: [],
    messages: {},
    friendRequests: {},
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
    if (state.user) {
      if (!unsubscribers.friends)
        unsubscribers.friends = getFriendsSnapshot(
          state.user,
          unsubscribers,
          dispatch,
          setFriendCount
        );
      if (!unsubscribers.friendRequests)
        unsubscribers.friendRequests = getFriendRequestsSnapshot(
          state.user,
          unsubscribers,
          dispatch
        );
      if (!unsubscribers.notes)
        unsubscribers.notes = getNotesSnapshot(state.user, dispatch);
      if (!unsubscribers.conversations)
        unsubscribers.conversations = getConversationsSnapshot(
          state.user,
          unsubscribers,
          dispatch,
          setConversationCount
        );
      if (!unsubscribers.channels)
        unsubscribers.channels = getChannelsSnapshot(
          state.user,
          unsubscribers,
          dispatch,
          setChannelCount
        );
    }
  }, [state.user]);

  useEffect(() => {
    if (state.uid) {
      const unsubscribers = unsubscribersRef.current;
      if (!unsubscribers.user)
        unsubscribers.user = getUserSnapshot(dispatch, state.uid);
    }
  }, [state.uid]);

  useEffect(() => {
    if (!onAuthChangeUnsub.current)
      onAuthChangeUnsub.current = onAuthChange(
        dispatch,
        initialRenderRef,
        setChannelCount,
        setConversationCount,
        setFriendCount,
        unsubscribersRef
      );
  }, []);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={darkTheme}>
        {state.user &&
        friendCount === Object.keys(state.friends).length &&
        conversationCount === Object.values(state.conversations).length &&
        channelCount === Object.values(state.channels).length ? (
          children
        ) : initialRenderRef.current || state.uid ? (
          <Loading />
        ) : (
          <div onClick={() => signInWithPopup(auth, provider)}>Sign in</div>
        )}
      </ThemeProvider>
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
