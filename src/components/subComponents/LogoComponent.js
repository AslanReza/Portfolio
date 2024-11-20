import React from "react";
import styled from "styled-components";
import { darkMode, lightMode } from "../themes/Theme";
const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => (props.color === "dark" ? darkMode.text : darkMode.body)};
  font-family: "Pacifico" !important;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;
const LogoComponent = (props) => {
  return <Logo color={props.theme}>R</Logo>;
};
export default LogoComponent;
