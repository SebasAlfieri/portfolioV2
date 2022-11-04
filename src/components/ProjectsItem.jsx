import React from 'react'
import styled from "styled-components"

const ProjectsItemContainer = styled.a`
  border-radius: 20px;
  width: 250px;
  height: 200px;
  background-color: #5b52df;
  background-repeat: no-repeat;
  background-position:center;
  background-size: cover;
  transition: 0.2s;
  text-decoration: none;

  &:hover{
    transform: scale(1.1)
  }
`

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
  outline: 1px solid #FE5A01;
  padding: 15px;
  text-align: center;
  color:#242021;

  &:hover{
    opacity: 1;
  }
`

const DescriptionUses = styled.p`
  margin-top: 10px;
  color: #FE5A01;
  font-weight: 600;
`

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
`

const Title = styled.div`
  position: relative;
  color: #242021;
  top: -45px;
  left: 10px;
  width: 60px;
  height: 60px;
  font-weight: 600;
`


function ProjectsItem(props) {

  let { img, title, uses, link, description, lenguages } = props
  return (
    <ProjectsItemContainer href={link} target="_blank" style={{backgroundImage: `url("${img}")`}}>
      <ProjectDescription>
        {description}
        <DescriptionUses>{lenguages}</DescriptionUses>
      </ProjectDescription>
      <Block>{uses}</Block>
      <Title>{title}</Title>
    </ProjectsItemContainer>
  )
}

export default ProjectsItem