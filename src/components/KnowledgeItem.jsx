import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  padding: 10px 20px;
  margin: 5px 5px;
  border-radius: 5px;
  width: fit-content;
  font-weight: 500;

  @media (min-width: 1400px) {
    padding: 15px 35px;
    margin: 5px 5px;
    font-size: 2rem;
    border-radius: 15px;
  }
`;

function KnowledgeItem(props) {
  let { title, background, color } = props;

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -1000 },
  };

  return (
    <Container
      as={motion.div}
      variants={item}
      style={{ backgroundColor: `${background}`, color: `${color}` }}
    >
      {title}
    </Container>
  );
}

export default KnowledgeItem;
