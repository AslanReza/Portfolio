import React from "react";
import { motion } from "framer-motion";
import { CiHashtag } from "react-icons/ci";
import { TbMoodLookUp } from "react-icons/tb";
import styled from "styled-components";
import { GithubIcon } from "../components/AllSvgs";
const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;
  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;
const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
  font-family: "Karla";
`;
const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla";
  font-weight: 500;
`;
const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;
const Tag = styled.span`
  margin-right: 1rem;
  font-family: "Karla";
  font-size: calc(0.5em + 0.3vw);
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;
const Link = styled.a`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  font-family: "Karla";
  display: flex;
  gap: 2px;
  align-items: center;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 32px 0 32px;
  font-size: calc(1em + 0.5vw);
  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;
const Git = styled.a`
  color: inherit;
  text-decoration: none;
  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};
const WorkCard = (props) => {
  const { id, name, description, tags, demo, github } = props.data;
  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((t, id) => {
          return (
            <Tag key={id}>
              <CiHashtag />
              {t}
            </Tag>
          );
        })}
      </Tags>
      <Footer>
        <Link href={demo} target="_blank">
          Visit
          <TbMoodLookUp />
        </Link>
        <Git href={github} target="_blank">
          <GithubIcon width={40} height={40} />
        </Git>
      </Footer>
    </Box>
  );
};

export default WorkCard;
