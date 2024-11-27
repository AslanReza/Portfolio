import React from "react";
import { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import LogoComponent from "../components/subComponents/LogoComponent";
import SocialSideBar from "../components/subComponents/SocialSideBar";
import PowerComponent from "../components/subComponents/PowerButton";
import { darkMode, lightMode } from "../components/themes/Theme";
import WorkCard from "../components/WorkCard";
import { Work } from "../data/WorkData";
import ParticlesComponent from "../components/subComponents/ParticleComponent";
import { motion } from "framer-motion";
import { YinYangIconWhite } from "../components/AllSvgs";
import BigTitle from "../components/subComponents/BigTitle";
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;
const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};
const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={darkMode}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialSideBar theme="dark" />
        <PowerComponent />
        <ParticlesComponent theme="other" />
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <WorkCard key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <YinYangIconWhite width={80} height={80} fill={darkMode.text} />
        </Rotate>

        <BigTitle text="WORK" top="5%" right="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
