import React from 'react'
import styled from "styled-components"
import ProjectsItem from './ProjectsItem'

const Column = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 500px;
`

function ProjectsColumn(props) {

  let { margin, imgTop, imgBot, usesTop, usesBot, linkTop, linkBot, titleTop, titleBot, descriptionTop, descriptionBot, lenguagesTop, lenguagesBot } = props

  return (
    <Column style={{marginTop:`${margin}`}}>
      <ProjectsItem img={imgTop} uses={usesTop} link={linkTop} title={titleTop} description={descriptionTop} lenguages={lenguagesTop}/>
      <ProjectsItem img={imgBot} uses={usesBot} link={linkBot} title={titleBot} description={descriptionBot} lenguages={lenguagesBot}/>
    </Column>
  )
}

export default ProjectsColumn