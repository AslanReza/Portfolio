import React from "react";
import styled from "styled-components";
import PowerButton from "../components/subComponents/PowerButton";
import LogoComponent from "../components/subComponents/LogoComponent";
import SocialSideBar from "../components/subComponents/SocialSideBar";
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

const HomePage = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent />
        <SocialSideBar />
      </Container>
    </MainContainer>
  );
};

export default HomePage;
