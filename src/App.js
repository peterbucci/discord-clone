import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Sidebar from "./fragments/Sidebar";
import UserSettings from "./pages/UserSettings";
import Channels from "./pages/Channels";
import FriendsList from "./pages/FriendsList";
import Conversation from "./pages/Conversation";
import Store from "./pages/Store";
import { StateProvider } from "./providers/StateProvider";
import { Container } from "./styles/app";
import Server from "pages/Server";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Container>
        <UserSettings />
        <Sidebar />
        <Outlet />
      </Container>
    ),
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
]);

function App() {
  return (
    <StateProvider>
      <RouterProvider router={router} />
    </StateProvider>
  );
}

export default App;
