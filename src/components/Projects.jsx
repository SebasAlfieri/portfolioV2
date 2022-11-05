import React from "react";
import styled from "styled-components";
import ProjectsColumn from "./ProjectsColumn";

const MainContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 75px;

  @media (min-width: 768px) {
    margin-top: 50px;
    margin-bottom: 75px;
  }
`;

const MainTitle = styled.h2`
  margin-left: 0;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: #242021;

  @media (min-width: 768px) {
    margin-left: 50px;
    font-size: 2rem;
    margin-bottom: -80px;
  }

  @media (min-width: 992px) {
    margin-bottom: -80px;
  }

  @media (min-width: 1200px) {
    font-size: 3rem;
    margin-bottom: -50px;
  }

  @media (min-width: 1400px) {
    font-size: 3.5rem;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin: auto;
  margin-top: 75px;
  width: 90%;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 100px;
    width: 100%;
  }

  @media (min-width: 992px) {
    width: 90%;
  }
`;

function Projects() {
  return (
    <MainContainer>
      <MainTitle>My Proyects</MainTitle>
      <ProjectsContainer>
        <ProjectsColumn
          margin="0"
          titleTop="WatchMe"
          titleBot="Valorant"
          imgTop="./images/watchme.jpg"
          imgBot="./images/valorant.jpg"
          usesTop="React Js"
          usesBot="Js"
          linkTop="https://watchmealfieri.vercel.app/"
          linkBot="https://valorant-wheat.vercel.app/"
          descriptionTop="An e-commerce including a functional cart and back-end for products and orders management"
          descriptionBot="One of my first Js approaches. A bit inneficient. But looks cool!"
          lenguagesTop="React Js - Firebase"
          lenguagesBot="Js - DOM - Responsive"
        />
        <ProjectsColumn
          margin="50px"
          titleTop="Reflejar"
          titleBot="Widgets"
          imgTop="./images/reflejar.jpg"
          imgBot="./images/widgets.jpg"
          linkTop="https://reflejar-sebasalfieri.vercel.app/"
          linkBot="https://sebasalfieri.github.io/Widgets/"
          usesTop="React Js"
          usesBot="Js"
          descriptionTop="A team freelance job where i worked as a developer for a data analysts team"
          descriptionBot="Some simple widgets using different java script features as Local Storate, API - DOM and JSON"
          lenguagesTop="React Js - Responsive"
          lenguagesBot="Js - Responsive - APIs - JSON"
        />
        <ProjectsColumn
          margin="100px"
          titleTop="Todito"
          titleBot="Game Website"
          imgTop="./images/todito.jpg"
          imgBot="./images/lol.jpg"
          linkTop="https://todito.vercel.app/"
          linkBot="https://lolalfierii.netlify.app/"
          usesTop="Js"
          usesBot="Sass"
          descriptionTop="A simple drinking game i made to play with friends"
          descriptionBot="A League of Legends webpage simulator"
          lenguagesTop="Js - Responsive"
          lenguagesBot="Sass - Responsive - Bootstrap"
        />
      </ProjectsContainer>
    </MainContainer>
  );
}

export default Projects;
