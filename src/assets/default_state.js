const defaultState = {
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
  servers: {},
  channelCategories: {},
  channels: {},
  userSettings: {
    enableSettings: false,
    enableMicrophone: true,
    enableHeadphones: true,
  },
  friendsListTab: "Online",
  initialRender: true,
  unsubscribers: {},
};

export default defaultState;
