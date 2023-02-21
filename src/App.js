import { StateProvider } from "providers/StateProvider";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import router from "router";
import darkTheme from "themes/dark";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <StateProvider>
        <RouterProvider router={router} />
      </StateProvider>
    </ThemeProvider>
  );
}

export default App;
