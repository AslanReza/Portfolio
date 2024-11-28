const getMarkdownContent = (id) => {
  try {
    return require(`./blogContent/content-${id}.md`);
  } catch (error) {
    return "Content not available";
  }
};
export const Blogs = [
  {
    id: 1,
    name: "HTML & CSS: The Underrated Skills That Made Learning JavaScript Easier",
    tags: ["HTML", "CSS", "Javascript"],
    date: "25 Nov, 2024",
    imgSrc:
      "https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/blog/1",
    content: getMarkdownContent(1),
  },
  {
    id: 2,
    name: "Learning React: A Beginner’s Journey",
    tags: ["React", "JavaScript", "Frontend"],
    date: "1 Dec, 2024",
    imgSrc:
      "https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/blog/2",
    content: getMarkdownContent(2),
  },
];
