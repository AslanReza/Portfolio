import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import PowerButton from "../components/subComponents/PowerButton";
import { Blogs } from "../data/BlogData";
import { motion } from "framer-motion";
import { marked } from "marked";

const BlogContainer = styled(motion.div)`
  padding: 3rem;
  max-width: 800px;
  margin: auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border-radius: 15px;
  background-position: center;
  background-size: contain;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    border-radius: 10px;
  }
`;

const BlogTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const BlogDate = styled.p`
  font-size: 0.9rem;
  color: grey;
  margin-bottom: 2rem;
`;
const BackButtonContainer = styled.div`
  position: fixed;
  bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BackButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  font-size: 0.7rem;
  scale: 1;
  border: none;
  opacity: 0.8;
  transition: all 0.2s;
  border-radius: 5px;
  animation: ${pulse} 3s infinite;
  cursor: pointer;
  &:hover {
    opacity: 1;
    border: 1px solid black;
    animation: none;
  }
`;
const BlogContent = styled.div``;
const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = Blogs.find((blog) => blog.id === parseInt(id));

  const [content, setContent] = useState("");

  useEffect(() => {
    if (blog) {
      fetch(blog.content)
        .then((response) => response.text())
        .then((data) => {
          setContent(marked(data));
        })
        .catch((error) => {
          console.error("Error loading markdown content:", error);
        });
    }
  }, [blog]);

  if (!blog) {
    return <p>Blog not found!</p>;
  }
  const handleBack = () => {
    navigate("/blog");
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <BlogContainer>
        <PowerButton />
        <BlogImage src={blog.imgSrc} alt={blog.name} />
        <BlogTitle>{blog.name}</BlogTitle>
        <BlogDate>{blog.date}</BlogDate>
        <BlogContent dangerouslySetInnerHTML={{ __html: content }} />{" "}
        <BackButtonContainer>
          <BackButton onClick={handleBack}>Back to Blogs</BackButton>
        </BackButtonContainer>
      </BlogContainer>
    </motion.div>
  );
};

export default BlogDetailPage;
