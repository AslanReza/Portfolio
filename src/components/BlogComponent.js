import React from "react";
import { MdDateRange } from "react-icons/md";
import styled from "styled-components";
import { CiHashtag } from "react-icons/ci";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const BlogBox = styled(NavLink)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  z-index: 5;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
`;
const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  height: 60%;
  border-radius: 6px;
  width: 100%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
  ${BlogBox}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;
const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla";
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};
  ${BlogBox}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 2px;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
  display: flex;
  align-items: center;
`;
const Date = styled.span`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 2px;
`;
const Container = styled(motion.div)``;
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
const BlogComponent = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;
  return (
    <Container variants={Item}>
      <BlogBox target="_blank" href={`${link}`}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => {
            return (
              <Tag key={id}>
                {" "}
                <CiHashtag />
                {t}
              </Tag>
            );
          })}
        </HashTags>
        <Date>
          <MdDateRange />
          {date}
        </Date>
      </BlogBox>
    </Container>
  );
};

export default BlogComponent;
