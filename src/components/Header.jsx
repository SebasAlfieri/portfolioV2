import React from 'react'
import styled from 'styled-components'
import KnowledgeItem from './KnowledgeItem'

const HeaderMainContainer = styled.div`
  display: flex;
  padding: 50px 50px;
  padding-bottom: 10px;

  @media (min-width: 768px) {
    padding: 50px 50px;
  }
`

const HeaderItemsContainer = styled.div`
  height: 500px;

  @media (min-width: 768px) {
    height: 425px;
  }
`

const HeaderItemsText = styled.div`

`

const HeaderTitleTop = styled.h1`
  font-size: 3rem;
  font-weight: 100;
  width: fit-content;

  @media (min-width: 768px) {
  font-size: 4rem;
  font-weight: 100;
  width: fit-content;
  }
`

const HeaderTitleBot = styled.h1`
  font-size: 3rem;
  font-weight: 100;
  width: fit-content;

  @media (min-width: 768px) {
  font-size: 4rem;
  font-weight: 100;
  width: fit-content;
  }
`

const TitleBotSpan = styled.span`
  font-weight: 600;
`

const HeaderSubtitle = styled.h3`
  font-size: 0.9rem;
  margin-left: 0;
  margin-bottom: 80px;

  @media (min-width: 768px) {
  margin-left: 15px;
  margin-bottom: 40px;
  }
`


const HeaderContact = styled.a`
  padding: 15px;
  text-decoration: none;
  border-radius: 25px;
  background-color: #FE5A01;
  color: white;
  
  &:hover{
    background-color: #FC8E3F;
  }

  @media (min-width: 768px) {
    padding: 10px;
  }
`

const HeaderKnowledges = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  width: 300px;
`

const HeaderImgContainer = styled.img`
  display: none;
  position: absolute;
  width: 450px;
  height: 450px;
  left: 60vw;

  @media (min-width: 768px) {
    display: flex;
    width: 300px;
    height: 300px;
    left: 60vw;
    align-self: center;
  }

  @media (min-width: 1024px) {
    display: flex;
    width: 450px;
    height: 450px;
    left: 60vw;
  }
`

function Header() {


  return (
    <HeaderMainContainer id='header'>
      <HeaderItemsContainer>
        <HeaderItemsText>
          <HeaderTitleTop>My name</HeaderTitleTop>
          <HeaderTitleBot>is <TitleBotSpan>Sebastian</TitleBotSpan></HeaderTitleBot>
          <HeaderSubtitle>Im a junior programer highly motivated to create and grow.</HeaderSubtitle>
          <HeaderContact href='#contact'>Contact me</HeaderContact>
        </HeaderItemsText>
        <HeaderKnowledges>
          <KnowledgeItem title="HTML" background="#FC8E3F" color="black"/>
          <KnowledgeItem title="CSS" background="#FE5A01" color="white"/>
          <KnowledgeItem title="JavaScript" background="#222021" color="white"/>
          <KnowledgeItem title="React JS" background="#E4E4E4" color="black"/>
        </HeaderKnowledges>
      </HeaderItemsContainer>
      <HeaderImgContainer src='./images/iconHeader.png'>

      </HeaderImgContainer>
    </HeaderMainContainer>
  )
}

export default Header