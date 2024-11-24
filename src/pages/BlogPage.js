import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ParticlesComponent from "../components/subComponents/ParticleComponent";
import cover_3 from "../assets/photos/img/cover-v3.jpg";
import LogoComponent from "../components/subComponents/LogoComponent";
import PowerButton from "../components/subComponents/PowerButton";
import SocialSideBar from "../components/subComponents/SocialSideBar";
import BlogComponent from "../components/BlogComponent";
import { Blogs } from "../data/BlogData";
import { motion } from "framer-motion";
import BigTitle from "../components/subComponents/BigTitle";
import AnchorComponent from "../components/subComponents/AnchorComponent";

const MainContainer = styled(motion.div)`
  background-image: url(${cover_3});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  /* filter: grayscale(100%); */
`;
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;
const GridItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
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
const BlogPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);
  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialSideBar />
        <ParticlesComponent theme="star" />
        <AnchorComponent number={numbers} />
        <Main>
          <GridItem
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ type: "spring", duration: 2, delay: 1 }}
          >
            {Blogs.map((blog) => {
              return <BlogComponent key={blog.id} blog={blog} />;
            })}
          </GridItem>
        </Main>
        <BigTitle text="BLOG" top="4rem" left="4rem" />
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
