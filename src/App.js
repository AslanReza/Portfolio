import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./BaseStyles";
import { lightMode } from "./components/themes/Theme";
import AnimatedCursor from "react-animated-cursor";
import HomePage from "./pages/HomePage";
import BlogDetailPage from "./components/BlogDetailPage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import BlogPage from "./pages/BlogPage";
import WorkPage from "./pages/WorkPage";
import { Route, Routes } from "react-router";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <>
      <AnimatedCursor
        innerStyle={{
          backgroundColor: "#555",
        }}
        outerStyle={{
          backgroundColor: "#fff",
          mixBlendMode: "exclusion",
        }}
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
      />
      <GlobalStyle />
      <ThemeProvider theme={lightMode}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route exact path="/" Component={HomePage} />
            <Route exact path="/about" Component={AboutPage} />
            <Route exact path="/blog" Component={BlogPage} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route exact path="/work" Component={WorkPage} />
            <Route exact path="/skills" Component={SkillsPage} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
