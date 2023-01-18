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
  SET_NOTES: "SET_NOTES",
  SET_CONVERSATIONS: "SET_CONVERSATIONS",
  SET_ACTIVE_CONVERSATIONS: "SET_ACTIVE_CONVERSATIONS",
  REMOVE_ACTIVE_CONVERSATIONS: "REMOVE_ACTIVE_CONVERSATIONS",
  SET_MESSAGES: "SET_MESSAGES",
  SET_CHANNELS: "SET_CHANNELS",
  UPDATE_SETTINGS: "UPDATE_SETTINGS",
  SET_FRIENDS_LIST_TAB: "SET_FRIENDS_LIST_TAB",
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

    case actionTypes.SET_CHANNELS:
      return {
        ...state,
        channels: {
          ...state.channels,
          ...reduceById(action.channels),
        },
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

    case actionTypes.LOGOUT_USER:
      return {
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
      };

    default:
      return state;
  }
}
