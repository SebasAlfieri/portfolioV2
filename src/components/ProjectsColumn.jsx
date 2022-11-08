import React from "react";
import styled from "styled-components";
import ProjectsItem from "./ProjectsItem";
import "../App.css";

const Column = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 500px;
  padding-right: auto;
  padding-left: auto;

  @media (min-width: 768px) {
    height: 400px;
    padding-right: 25px;
    padding-left: 25px;
  }

  @media (min-width: 992px) {
    height: 500px;
    padding-right: 0px;
    padding-left: 0px;
  }

  @media (min-width: 1024px) {
    height: 500px;
    padding-right: 10px;
    padding-left: 10px;
  }

  @media (min-width: 1300px) {
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (min-width: 1400px) {
    height: 650px;
  }

  @media (min-width: 1600px) {
    height: 750px;
    padding-right: 38px;
    padding-left: 38px;
  }
`;

function ProjectsColumn(props) {
  let {
    margin,
    marginBot,
    imgTop,
    imgBot,
    usesTop,
    usesBot,
    linkTop,
    linkBot,
    titleTop,
    titleBot,
    descriptionTop,
    descriptionBot,
    lenguagesTop,
    lenguagesBot,
    displayTop,
    displayBot,
    twoItems
  } = props;

  return (
    <Column id="column" style={{ marginTop: `${margin}`, marginBottom: `${marginBot}` }}>
      <ProjectsItem
        display={displayTop}
        img={imgTop}
        uses={usesTop}
        link={linkTop}
        title={titleTop}
        description={descriptionTop}
        lenguages={lenguagesTop}
        twoItems={true}
      />{twoItems &&       
      <ProjectsItem
          display={displayBot}
          img={imgBot}
          uses={usesBot}
          link={linkBot}
          title={titleBot}
          description={descriptionBot}
          lenguages={lenguagesBot}
        /> }

    </Column>
  );
}

export default ProjectsColumn;
