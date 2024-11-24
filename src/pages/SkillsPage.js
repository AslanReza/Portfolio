import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightMode } from "../components/themes/Theme";
import { FaLaptopCode } from "react-icons/fa6";
import { FaPalette } from "react-icons/fa";
import LogoComponent from "../components/subComponents/LogoComponent";
import SocialSideBar from "../components/subComponents/SocialSideBar";
import PowerComponent from "../components/subComponents/PowerButton";
import ParticleComponent from "../components/subComponents/ParticleComponent";
import BigTitle from "../components/subComponents/BigTitle";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Box = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  /* background-color: ${(props) => props.theme.body}; */
  background-color: rgba(255, 255, 255, 0.5);
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  cursor: pointer;
  line-height: 1.6;
  font-family: "Ubuntu Mono";
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.body};
    /* background-color: ${(props) => props.theme.text}; */
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 12px;
  }
`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  gap: 4px;
  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0%.5rem 0;
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  p,
  ul {
    margin-left: 2rem;
  }
  ${Box}:hover & {
    color: ${(props) => props.theme.body};
  }
`;
const SkillsPage = () => {
  return (
    <ThemeProvider theme={lightMode}>
      <MainContainer>
        <LogoComponent theme="light" />
        <SocialSideBar theme="light" />
        <PowerComponent />
        <ParticleComponent theme="light" />
        <Box>
          <Title>
            <FaPalette className="paletteIcon" /> Designer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>I LIKE TO DESIGN</strong>
            <ul>
              <li>Web Apps</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>TOOLS</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </Description>
        </Box>
        <Box>
          <Title>
            <FaLaptopCode className="laptopIcon" /> Frontend Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>SKILLS</strong>
            <p>
              Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, MongoDB
              etc.
            </p>
          </Description>
          <Description>
            <strong>TOOLS</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
        </Box>
        <BigTitle text="SKILLS" top="75%" right="4%" />
      </MainContainer>
    </ThemeProvider>
  );
};

export default SkillsPage;
