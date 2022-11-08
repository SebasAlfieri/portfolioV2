import React from "react";
import styled from "styled-components";
import { addScaleCorrector, motion } from "framer-motion";

const ProjectsItemContainer = styled.a`
  border-radius: 20px;
  width: 250px;
  height: 200px;
  background-color: #5b52df;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 0.2s;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 200px;
    height: 150px;
  }

  @media (min-width: 992px) {
    width: 250px;
    height: 200px;
  }

  @media (min-width: 1400px) {
    width: 300px;
    height: 250px;
  }

  @media (min-width: 1600px) {
    width: 350px;
    height: 300px;
  }
`;

const ProjectDescription = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 20px;
  opacity: 0;
  transition: 0.3s;
  outline: 2px solid #fe5a01;
  padding: 15px;
  text-align: center;
  color: #242021;

  &:hover {
    opacity: 1;
  }
`;

const DescriptionUses = styled.p`
  margin-top: 10px;
  color: #fe5a01;
  font-weight: 600;
`;

const Block = styled.div`
  background-color: #242021;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -40px;
  left: 210px;
  width: 60px;
  height: 60px;
  color: white;
  border-radius: 10px;

  @media (min-width: 768px) {
    top: -40px;
    left: 160px;
  }

  @media (min-width: 992px) {
    top: -40px;
    left: 210px;
  }

  @media (min-width: 1400px) {
    top: -40px;
    left: 260px;
    width: 70px;
    height: 70px;
  }

  @media (min-width: 1600px) {
    top: -50px;
    left: 300px;
    width: 80px;
    height: 80px;
  }
`;

const Title = styled.div`
  position: relative;
  color: #242021;
  top: -45px;
  left: 10px;
  width: fit-content;
  height: 60px;
  font-weight: 600;

  @media (min-width: 1400px) {
    font-size: 1.5rem;
  }
`;

function ProjectsItem(props) {
  let { img, title, uses, link, description, lenguages, display } = props;

  return (
    <ProjectsItemContainer
      as={motion.a}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration:0.1 }}
      whileHover={{ scale: 1.05 }}
      href={link}
      target="_blank"
      style={{ backgroundImage: `url("${img}")`, display:`${display}` }}
    >
      <ProjectDescription>
        {description}
        <DescriptionUses>{lenguages}</DescriptionUses>
      </ProjectDescription>
      <Block>{uses}</Block>
      <Title>{title}</Title>
    </ProjectsItemContainer>
  );
}

export default ProjectsItem;
