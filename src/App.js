import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ChannelRoot from "./pages/ChannelRoot";
import DirectMessages from "./pages/DirectMessages";
import UserChannel from "./pages/UserChannel";
import Sidebar from "./fragments/Sidebar";
import { Container } from "./styles/app";
import "./App.css";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Container>
        <Sidebar channels={CHANNELS} />
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
            element: <DirectMessages />,
          },
          ...CHANNELS.map((channel) => {
            return {
              path: channel.id,
              element: <UserChannel {...channel} />,
            };
          }),
        ],
      },
      {
        path: "guild-discovery",
        element: <div>Explore Servers</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
