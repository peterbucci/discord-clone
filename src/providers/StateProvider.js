import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import reducer, { actionTypes } from "../reducers/state_reducer";

const StateContext = createContext();

const USERS = [
  {
    id: 1,
    name: "Peter",
    avatar: null,
    status: "Online",
    friends: [2, 3, 4, 5],
    activeConversations: [
      "1051205863114821673",
      "1051205863114864536",
      "1051205863114029387",
      "1051205863114235643",
    ],
  },
  {
    id: 2,
    name: "Damon",
    avatar: null,
    status: "Online",
  },
  {
    id: 3,
    name: "Bacon",
    avatar: null,
    status: "AFK",
  },
  {
    id: 4,
    name: "Crumpet",
    avatar: null,
    status: "Offline",
  },
  {
    id: 5,
    name: "Artichoke",
    avatar: null,
    status: "DND",
  },
];

const CONVERSATIONS = [
  {
    id: "1051205863114821673",
    users: [1, 2],
    messages: [],
  },
  {
    id: "1051205863114864536",
    users: [1, 3],
    messages: [],
  },
  {
    id: "1051205863114029387",
    users: [1, 4],
    messages: [],
  },
  {
    id: "1051205863114235643",
    users: [1, 5],
    messages: [],
  },
];

const CHANNELS = [
  {
    name: "Peter's Channel",
    tag: "PB",
    id: "23423423423",
  },
  {
    name: "Damon's Channel",
    tag: "DK",
    id: "234234223455",
  },
];

export const StateProvider = ({ children }) => {
  const [initialRender, setInitialRender] = useState(true);
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    users: {},
    conversations: {},
    channels: {},
  });

  useEffect(() => {
    if (initialRender) {
      dispatch({
        type: actionTypes.SET_USER,
        user: 1,
      });
      dispatch({
        type: actionTypes.SET_USERS,
        users: USERS,
      });
      dispatch({
        type: actionTypes.SET_CONVERSATIONS,
        conversations: CONVERSATIONS,
      });
      dispatch({
        type: actionTypes.SET_CHANNELS,
        channels: CHANNELS,
      });
      setInitialRender(false);
    }
  }, []);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {initialRender ? <></> : children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
