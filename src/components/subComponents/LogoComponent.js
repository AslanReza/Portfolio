import React from "react";
import styled from "styled-components";
import { darkMode, lightMode } from "../themes/Theme";
import { NavLink } from "react-router-dom";
const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => (props.color === "dark" ? darkMode.text : darkMode.body)};
  font-family: "Pacifico" !important;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  cursor: pointer;
  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;
const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
      <NavLink  to={"/"}>R.</NavLink>
    </Logo>
  );
};
export default LogoComponent;
