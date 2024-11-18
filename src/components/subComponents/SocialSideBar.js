import React from "react";
import { NavLink } from "react-router-dom";
import { GithubIcon, InstagramIcon, StackIcon, TwitterIcon } from "../AllSvgs";
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
const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
`;
const SocialSideBar = () => {
  return (
    <Icons>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/AslanReza" }}
        >
          <GithubIcon width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{
            pathname: "https://stackoverflow.com/users/28357015/aslani-reza",
          }}
        >
          <StackIcon width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{
            pathname: "https://www.instagram.com/aslani.rez",
          }}
        >
          <InstagramIcon width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://twitter.com/rezaslan" }}
        >
          <TwitterIcon width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <Line />
    </Icons>
  );
};

export default SocialSideBar;
