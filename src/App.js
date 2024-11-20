import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./BaseStyles";
import { lightMode } from "./components/themes/Theme";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import BlogPage from "./pages/BlogPage";
import WorkPage from "./pages/WorkPage";
import { Route, Routes } from "react-router";
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightMode}>
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route exact path="/about" Component={AboutPage} />
          <Route exact path="/blog" Component={BlogPage} />
          <Route exact path="/work" Component={WorkPage} />
          <Route exact path="/skills" Component={SkillsPage} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
