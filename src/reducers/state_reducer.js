import defaultState from "assets/default_state";

const reduceById = (arr) => {
  return arr.reduce(
    (obj, item) => ({
      ...obj,
      [item.id]: item,
    }),
    {}
  );
};

export const actionTypes = {
  SET_UID: "SET_UID",
  SET_USER: "SET_USER",
  SET_USERS: "SET_USERS",
  SET_FRIENDS: "SET_FRIENDS",
  REMOVE_FRIEND: "REMOVE_FRIEND",
  SET_FRIEND_REQUESTS: "SET_FRIEND_REQUESTS",
  REMOVE_FRIEND_REQUEST: "REMOVE_FRIEND_REQUEST",
  SET_NOTES: "SET_NOTES",
  SET_CONVERSATIONS: "SET_CONVERSATIONS",
  SET_ACTIVE_CONVERSATIONS: "SET_ACTIVE_CONVERSATIONS",
  REMOVE_ACTIVE_CONVERSATIONS: "REMOVE_ACTIVE_CONVERSATIONS",
  SET_MESSAGES: "SET_MESSAGES",
  SET_SERVERS: "SET_SERVERS",
  SET_CHANNEL_CATEGORIES: "SET_CHANNEL_CATEGORIES",
  SET_CHANNELS: "SET_CHANNELS",
  SET_SIDEBAR_SELECTED: "SET_SIDEBAR_SELECTED",
  UPDATE_SETTINGS: "UPDATE_SETTINGS",
  SET_FRIENDS_LIST_TAB: "SET_FRIENDS_LIST_TAB",
  SET_INITIAL_RENDER: "SET_INITIAL_RENDER",
  SET_UNSUBSCRIBERS: "SET_UNSUBSCRIBERS",
  SET_QUERY_CURSOR: "SET_QUERY_CURSOR",
  LOGOUT_USER: "LOGOUT_USER",
};

export default function reducer(state, action) {
  const { type, ...restAction } = action;
  switch (action.type) {
    case actionTypes.SET_UID:
      return {
        ...state,
        uid: action.uid,
      };

    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.SET_USERS:
      return {
        ...state,
        users: {
          ...state.users,
          ...reduceById(action.users),
        },
      };

    case actionTypes.SET_FRIENDS:
      return {
        ...state,
        friends: { ...state.friends, ...reduceById(action.friends) },
      };

    case actionTypes.REMOVE_FRIEND:
      return {
        ...state,
        friends: Object.keys(state.friends)
          .filter((key) => key !== action.friendId)
          .reduce((obj, key) => {
            obj[key] = state.friends[key];
            return obj;
          }, {}),
      };

    case actionTypes.SET_FRIEND_REQUESTS:
      return {
        ...state,
        friendRequests: {
          ...state.friendRequests,
          ...reduceById(action.friendRequests),
        },
      };

    case actionTypes.REMOVE_FRIEND_REQUEST:
      return {
        ...state,
        friendRequests: Object.keys(state.friendRequests)
          .filter((key) => key !== action.friendRequestId)
          .reduce((obj, key) => {
            obj[key] = state.friendRequests[key];
            return obj;
          }, {}),
      };

    case actionTypes.SET_NOTES:
      return {
        ...state,
        notes: { ...state.notes, ...reduceById(action.notes) },
      };

    case actionTypes.SET_CONVERSATIONS:
      return {
        ...state,
        conversations: {
          ...state.conversations,
          ...reduceById(action.conversations),
        },
      };

    case actionTypes.SET_ACTIVE_CONVERSATIONS:
      return {
        ...state,
        activeConversations:
          state.activeConversations.indexOf(action.activeConversation) > -1
            ? state.activeConversations
            : [...state.activeConversations, action.activeConversation],
      };

    case actionTypes.REMOVE_ACTIVE_CONVERSATIONS:
      return {
        ...state,
        activeConversations: state.activeConversations.filter(
          (conversation) => action.activeConversation !== conversation
        ),
      };

    case actionTypes.SET_MESSAGES:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.id]: {
            ...state.messages[action.id],
            ...reduceById(action.messages),
          },
        },
      };

    case actionTypes.SET_SERVERS:
      return {
        ...state,
        servers: {
          ...state.servers,
          ...reduceById(action.servers),
        },
      };

    case actionTypes.SET_CHANNEL_CATEGORIES:
      return {
        ...state,
        channelCategories: {
          ...state.channelCategories,
          [action.server]: {
            ...state.channelCategories[action.server],
            ...reduceById(action.channelCategories),
          },
        },
      };

    case actionTypes.SET_CHANNELS:
      return {
        ...state,
        channels: {
          ...state.channels,
          ...reduceById(action.channels),
        },
      };

    case actionTypes.SET_SIDEBAR_SELECTED:
      return {
        ...state,
        sidebarSelected: action.selected,
      };

    case actionTypes.UPDATE_SETTINGS:
      return {
        ...state,
        userSettings: {
          ...state.userSettings,
          ...restAction,
        },
      };

    case actionTypes.SET_FRIENDS_LIST_TAB:
      return {
        ...state,
        friendsListTab: action.tab,
      };

    case actionTypes.SET_INITIAL_RENDER:
      return {
        ...state,
        initialRender: action.initialRender,
      };

    case actionTypes.SET_UNSUBSCRIBERS:
      return {
        ...state,
        unsubscribers: {
          ...state.unsubscribers,
          ...action.unsubscribers,
        },
      };

    case actionTypes.SET_QUERY_CURSOR:
      return {
        ...state,
        queryCursors: {
          ...state.queryCursors,
          ...action.queryCursor,
        },
      };

    case actionTypes.LOGOUT_USER:
      return defaultState;

    default:
      return state;
  }
}
