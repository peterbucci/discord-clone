import { createBrowserRouter } from "react-router-dom";
import Channels from "./pages/Channels";
import Server from "pages/Server";
import FriendsList from "./pages/FriendsList";
import Conversation from "./pages/Conversation";
import Store from "./pages/Store";
import AnimatedRoot from "pages/AnimatedRoot";
import Login from "pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AnimatedRoot />,
    children: [
      {
        path: "channels",
        element: <Channels />,
        children: [
          {
            path: "@me",
            element: <FriendsList />,
          },
          {
            path: "@me/:conversationId",
            element: <Conversation />,
          },
        ],
      },
      {
        path: "channels/:serverId",
        element: <Server />,
      },
      {
        path: "channels/:serverId/:channelId",
        element: <Server />,
      },
      {
        path: "guild-discovery",
        element: <div>Explore Servers</div>,
      },
      {
        path: "store",
        element: <Store />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
