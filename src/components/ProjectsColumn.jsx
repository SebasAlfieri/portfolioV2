import React from 'react'
import styled from "styled-components"
import ProjectsItem from './ProjectsItem'
import "../App.css"

const Column = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 500px;

  @media (min-width: 768px) {
    height: 400px;
  }

  @media (min-width: 992px) {
    height: 500px;
  }

  @media (min-width: 1400px) {
    height: 650px;
  }

  @media (min-width: 1600px) {
    height: 750px;
  }
`

function ProjectsColumn(props) {

  let { margin, imgTop, imgBot, usesTop, usesBot, linkTop, linkBot, titleTop, titleBot, descriptionTop, descriptionBot, lenguagesTop, lenguagesBot } = props

  return (
    <Column id='column' style={{marginTop:`${margin}`}}>
      <ProjectsItem img={imgTop} uses={usesTop} link={linkTop} title={titleTop} description={descriptionTop} lenguages={lenguagesTop}/>
      <ProjectsItem img={imgBot} uses={usesBot} link={linkBot} title={titleBot} description={descriptionBot} lenguages={lenguagesBot}/>
    </Column>
  )
}

export default ProjectsColumn