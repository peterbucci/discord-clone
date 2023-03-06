import { StateProvider } from "providers/StateProvider";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import router from "router";
import darkTheme from "themes/dark";
import { GlobalStyle } from "styles/app";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <StateProvider>
        <RouterProvider router={router} />
      </StateProvider>
    </ThemeProvider>
  );
}

export default App;
