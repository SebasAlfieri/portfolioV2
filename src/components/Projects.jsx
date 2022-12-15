import React from "react";
import styled from "styled-components";
import ProjectsColumn from "./ProjectsColumn";
import ProjectsItem from "./ProjectsItem";

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
  flex-wrap: wrap;
  margin: auto;
  margin-top: 75px;
  width: 90%;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 100px;
    width: 100%;
  }

  @media (min-width: 992px) {
    width: 80%;
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
          linkBot="https://valorant-ten.vercel.app/"
          descriptionTop="An e-commerce including a functional cart and back-end for products and orders management"
          descriptionBot="One of my first Js approaches. Looks cool!"
          lenguagesTop="React Js - Firebase"
          lenguagesBot="Js - DOM"
          twoItems={true}
        />
        <ProjectsColumn
          margin="50px"
          titleTop="Liteflix"
          titleBot="Reflejar (W.I.P.)"
          imgTop="./images/liteflix.jpg"
          imgBot="./images/reflejar.jpg"
          linkTop="https://liteflix-challenge-alfieri.vercel.app/"
          linkBot="#"
          usesTop="React Js"
          usesBot="React Js"
          descriptionTop="A fancy movies page simulator"
          descriptionBot="A team freelance job where im working as a developer for a data analysts team"
          lenguagesTop="Framer Motion - Api - Styled Components"
          lenguagesBot="React Js"
          twoItems={true}
        />
        <ProjectsColumn
          margin="100px"
          titleTop="Huggies Freelance"
          titleBot="My Secret"
          imgTop="./images/huggies.jpg"
          imgBot="./images/mysecret.jpg"
          linkTop="https://mixeatuhumor.withspotify.com/login"
          linkBot="https://my-secret-seven.vercel.app/"
          usesTop="React Js"
          usesBot="React Js"
          descriptionTop="A freelacer for Huggies where i worked as front end developer together with a back end developer"
          descriptionBot="A webpage where people post their secrets Anonymously using Firebase as Backend server"
          lenguagesTop="React Js - Next Js"
          lenguagesBot="React Js - Firebase"
          twoItems={true}
        />
          <ProjectsColumn
          margin="50px"
          marginBot="-250px"
          titleTop="Todito"
          imgTop="./images/todito.jpg"
          linkTop="https://todito.vercel.app/"
          usesTop="Js"
          descriptionTop="A simple drinking game i made to play with friends"
          lenguagesTop="Js"
          twoItems={false}
        />
                  <ProjectsColumn
          margin="100px"
          marginBot="-250px"
          titleTop="Game website"
          imgTop="./images/lol.jpg"
          linkTop="https://lolalfierii.netlify.app/"
          usesTop="Sass"
          descriptionTop="A League of Legends webpage simulator"
          lenguagesTop="Sass - Bootstrap"
          twoItems={false}
        />
          <ProjectsColumn
          margin="150px"
          marginBot="-250px"
          titleTop="Widgets"
          imgTop="./images/widgets.jpg"
          linkTop="https://sebasalfieri.github.io/Widgets/"
          usesTop="Js"
          descriptionTop="Some simple widgets using different java script features as Local Storate, API - DOM and JSON"
          lenguagesTop="Js - APIs - JSON - Sass"
          twoItems={false}
        />
      </ProjectsContainer>

    </MainContainer>
  );
}

export default Projects;
