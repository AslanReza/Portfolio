import React from "react";
import styled, { keyframes } from "styled-components";
import PowerButton from "../components/subComponents/PowerButton";
import LogoComponent from "../components/subComponents/LogoComponent";
import SocialSideBar from "../components/subComponents/SocialSideBar";
import { NavLink } from "react-router-dom";
import { YinYangIcon } from "../components/AllSvgs";
const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;
const Container = styled.div`
  padding: 2rem;
`;
const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  transform: rotate(90deg) translate(-50%, -50%);
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const Work = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  left: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const Skill = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;
const About = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;
const BottomSection = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const Rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`;
const Core = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > :first-child {
    animation: ${Rotate} infinite 1.5s linear;
  }
  & > :last-child {
    padding-top: 1rem;
  }
`;

const HomePage = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent />
        <SocialSideBar />
        <Core>
          <YinYangIcon width={200} height={200} fill="currentColor" />
          <span>Click Here</span>
        </Core>
        <Contact
          target="_blank"
          to={{ pathname: "mailto:aslanreza77@gmail.com" }}
        >
          <h2>Say Hi</h2>
        </Contact>
        <Blog to="/blog">
          <h2>Blog</h2>
        </Blog>
        <Work to="/work">
          <h2>Work</h2>
        </Work>
        <BottomSection>
          <Skill to="/skills">
            <h2>Skills</h2>
          </Skill>
          <About to="/about">
            <h2>About</h2>
          </About>
        </BottomSection>
      </Container>
    </MainContainer>
  );
};

export default HomePage;
