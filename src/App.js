import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./BaseStyles";
import { darkMode, lightMode } from "./components/Theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkMode}>App File</ThemeProvider>
    </>
  );
}

export default App;
