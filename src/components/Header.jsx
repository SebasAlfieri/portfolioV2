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

  @media (min-width: 1400px) {
    padding: 100px 100px;
  }
`

const HeaderItemsContainer = styled.div`
  height: 500px;

  @media (min-width: 768px) {
    height: 425px;
  }

  @media (min-width: 1400px) {
    height: 600px;
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

  @media (min-width: 1400px) {
    font-size: 7rem;
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

  @media (min-width: 1400px) {
    font-size: 7rem;
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

  @media (min-width: 1400px) {
    font-size: 2rem;
    margin-bottom: 80px;
    width: 650px;
  }

  @media (min-width: 1600px) {
    font-size: 2rem;
    margin-bottom: 80px;
    width: 800px;
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

  @media (min-width: 1400px) {
    font-size: 1.6rem;
    padding: 20px;
    border-radius: 35px;
  }
`

const HeaderKnowledges = styled.div`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  width: 300px;

  @media (min-width: 768px) {
    margin-top: 60px;
  }

  @media (min-width: 1400px) {
    width: 600px;
  }
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

  @media (min-width: 1400px) {
    width: 550px;
    height: 550px;
  }

  @media (min-width: 1600px) {
    width: 700px;
    height: 700px;
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