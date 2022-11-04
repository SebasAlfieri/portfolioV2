import React from 'react'
import styled from "styled-components"


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
`

function KnowledgeItem(props) {


  let { title, background, color } = props

  return (
    <Container style={{backgroundColor:`${background}`, color:`${color}`}}>{title}</Container>
  )
}

export default KnowledgeItem