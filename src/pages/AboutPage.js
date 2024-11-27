import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { darkMode } from "../components/themes/Theme";
import LogoComponent from "../components/subComponents/LogoComponent";
import SocialSideBar from "../components/subComponents/SocialSideBar";
import PowerComponent from "../components/subComponents/PowerButton";
import ParticleComponent from "../components/subComponents/ParticleComponent";
import BigTitle from "../components/subComponents/BigTitle";
import spaceman_v1 from "../assets/photos/img/spaceman-v1.png";
const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const Float = keyframes`
0%{
  transform: translateY(-10%);
}
50%{
  transform: translateY(15%) translateX(15px);
}
100%{
  transform: translateY(-10%);
}
`;
const FloatingIcon = styled.div`
  position: absolute;
  top: 10%;
  right: 15%;
  width: 20vw;
  animation: ${Float} 4s ease infinite;
  img {
    width: 175%;
    min-height: 512px;
    transform: rotateY(180deg);
  }
`;
const Box = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono";
`;
const AboutPage = () => {
  return (
    <ThemeProvider theme={darkMode}>
      <MainContainer>
        <LogoComponent theme="dark" />
        <SocialSideBar theme="dark" />
        <PowerComponent />
        <ParticleComponent theme="dark" />
        <FloatingIcon>
          <img src={spaceman_v1} alt="spaceman" />
        </FloatingIcon>
        <Box>
          I'm a front-end developer located in Iran. I love to create simple yet
          beautiful websites with great user experience.
          <br />
          <br />
          I'm interested in the whole frontend stack Like trying new things and
          building great projects. I love to write blogs and read books.
          <br />
          <br />I believe everything is an Art when you put your consciousness
          in it. You can connect with me via social links.
        </Box>
        <BigTitle text="About" top="75%" left="4%" />
      </MainContainer>
    </ThemeProvider>
  );
};

export default AboutPage;
