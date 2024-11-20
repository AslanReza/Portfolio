import React from "react";
import { PowerBtn } from "../AllSvgs";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fcf6f4;
  padding-top: 0.3rem;
  padding-bottom: 0.1rem;
  border-radius: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  z-index: 3;
  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }
  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;
const PowerButton = () => {
  return (
    <Power>
      <NavLink to={"/"}>
        <PowerBtn width={30} height={30} fill="currentColor" />
      </NavLink>
    </Power>
  );
};

export default PowerButton;
