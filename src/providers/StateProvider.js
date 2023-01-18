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
  getNotesSnapshot,
  getUserSnapshot,
} from "../api/get_snapshots";
import onAuthChange from "../api/on_auth_change";

import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Loading from "../pages/Loading";
const provider = new GoogleAuthProvider();

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const unsubscribersRef = useRef({});
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
      const unsubscribeNotes = getNotesSnapshot(state.user, dispatch);
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
        unsubscribeNotes();
        unsubscribeConversations();
        unsubscribeChannels();
      };
    }
  }, [state.user]);

  useEffect(() => {
    if (state.uid) {
      const unsubscribeUser = getUserSnapshot(dispatch, state.uid);
      return () => unsubscribeUser();
    }
  }, [state.uid]);

  useEffect(() => {
    const unsubscribeAuth = onAuthChange(dispatch, initialRenderRef);
    return () => unsubscribeAuth();
  }, []);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
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
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
