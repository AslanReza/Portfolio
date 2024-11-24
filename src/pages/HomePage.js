import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import PowerButton from "../components/subComponents/PowerButton";
import LogoComponent from "../components/subComponents/LogoComponent";
import SocialSideBar from "../components/subComponents/SocialSideBar";
import { NavLink } from "react-router-dom";
import { YinYangIcon } from "../components/AllSvgs";
import { TbClick } from "react-icons/tb";
import { click } from "@testing-library/user-event/dist/click";
import PrimerBox from "../components/PrimerBox";
import { delay, motion } from "framer-motion";

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
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
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
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
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
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "90%" : "50%")};
  transform: translate(-50%, -50%);
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  & > :first-child {
    animation: ${Rotate} infinite 1.5s linear;
  }
  & > :last-child {
    padding-top: 1rem;
    font-size: 32px;
    display: ${(props) => (props.click ? "none" : "inline-block")};
  }
`;
const DarkSection = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50% " : "0")};
  height: ${(props) => (props.click ? "100% " : "0")};
  z-index: 1;
  background-color: #000;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;
const HomePage = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent to="/" theme={click ? "dark" : "light"} />
        <SocialSideBar theme={click ? "dark" : "light"} />
        <DarkSection click={click} />
        <Core click={click}>
          <YinYangIcon
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>
            <TbClick />
          </span>
        </Core>
        <Contact>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a
              className="mailto"
              target="_blank"
              href="mailto:Aslanreza77@gmail.com?body=Hi%20Aslan"
            >
              Say Hi.
            </a>
          </motion.h2>
        </Contact>
        <Blog to="/blog">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Blog.
          </motion.h2>
        </Blog>
        <Work to="/work" click={+click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work.
          </motion.h2>
        </Work>
        <BottomSection>
          <About to="/about" click={+click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About.
            </motion.h2>
          </About>
          <Skill to="/skills">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Skills.
            </motion.h2>
          </Skill>
        </BottomSection>
      </Container>
      {click ? <PrimerBox click={click} /> : null}
    </MainContainer>
  );
};

export default HomePage;
