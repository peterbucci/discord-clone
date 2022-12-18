import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ChannelRoot from "./pages/ChannelRoot";
import FriendsList from "./pages/FriendsList";
import Conversation from "./pages/Conversation";
import Store from "./pages/Store";
import UserChannel from "./pages/UserChannel";
import Sidebar from "./fragments/Sidebar";
import { Container } from "./styles/app";
import "./App.css";
import { StateProvider } from "./providers/StateProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Container>
        <Sidebar />
        <Outlet />
      </Container>
    ),
    children: [
      {
        path: "channels",
        element: <ChannelRoot />,
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
        path: "channels/:channelId",
        element: <UserChannel />,
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
