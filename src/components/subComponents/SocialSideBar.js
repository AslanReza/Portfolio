import React from "react";
import { NavLink } from "react-router-dom";
import { darkMode, lightMode } from "../themes/Theme";
import { delay, motion } from "framer-motion";
import {
  GithubIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
} from "../AllSvgs";
import styled from "styled-components";
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.4rem 0;
  }
`;
const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkMode.text : darkMode.body};
`;
const SocialSideBar = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 2, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/AslanReza" }}
        >
          <GithubIcon
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkMode.text : darkMode.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 2, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{
            pathname: "https://stackoverflow.com/users/28357015/aslani-reza",
          }}
        >
          <TelegramIcon
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkMode.text : darkMode.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 2, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{
            pathname: "https://www.instagram.com/aslani.rez",
          }}
        >
          <InstagramIcon
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkMode.text : darkMode.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 2, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://twitter.com/rezaslan" }}
        >
          <TwitterIcon
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkMode.text : darkMode.body}
          />
        </NavLink>
      </motion.div>
      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialSideBar;
