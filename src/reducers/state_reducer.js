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
  SET_USER: "SET_USER",
  SET_USERS: "SET_USERS",
  SET_CONVERSATIONS: "SET_CONVERSATIONS",
  SET_CHANNELS: "SET_CHANNELS",
  UPDATE_SETTINGS: "UPDATE_SETTINGS",
  SET_FRIENDS_LIST_TAB: "SET_FRIENDS_LIST_TAB",
};

export default function reducer(state, action) {
  const { type, ...restAction } = action;
  switch (action.type) {
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

    case actionTypes.SET_CONVERSATIONS:
      return {
        ...state,
        conversations: {
          ...state.conversations,
          ...reduceById(action.conversations),
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

    default:
      return state;
  }
}
