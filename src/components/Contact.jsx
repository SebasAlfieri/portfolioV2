import React, { useState }  from 'react'
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';
import styled from "styled-components"

const ContactMainContainer = styled.div`
  color:#242021;
  font-size: 1.5rem;
  margin: auto;
  height: fit-content;
`

const ContactTitle = styled.h2`
  margin-left: 50px;
  font-size: 2rem;
  font-weight: 600;
`

const ContactContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  color:#ffffff;
  width: 600px;
  height: 200px;
  margin: auto;
  margin-top: 75px;
  margin-bottom: 100px;

    /* @media (min-width: 768px) {
      width: 60%;
      height: 60%;
  } */
`

const ContactBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 700px;
`

const ContactBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  font-size: 10rem;
  transition: 0.1s;
  background-color: #242021;
  border-radius: 25px;

  &:hover{
    color: #FC8E3F;
  }
`

const ContactBoxAnchor = styled.a`
  display: flex;  
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  font-size: 10rem;
  transition: 0.1s;
  color:#ffffff;
  background-color: #242021;
  border-radius: 25px;

  &:hover{
    color: #FC8E3F;
  }

  &:active{
    font-size: 13rem;
    color: #ffffff;
  }
`

const HoverContainer = styled.div`
  position: relative;
  text-align: center;
  bottom: 15px;
  background-color: #242021;
  color: white;
  padding: 5px;
  border-radius: 25px;
  width: 400px;
  font-size: 1rem;
  margin: auto;
`

const ClickContainer = styled.div`
  position: relative;
  text-align: center;
  top: 50px;
  background-color: #242021;
  color: white;
  padding: 5px;
  border-radius: 25px;
  width: 400px;
  font-size: 1rem;
  margin: auto;
`

const PopupsContainer = styled.div`
  height: 30px;
`


function Contact() {

  const [isHovering, setIsHovering] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleClick = () => {
    setClicked(true);
    navigator.clipboard.writeText("sebasalfieri@gmail.com")
  };

  return (
    <ContactMainContainer>
      <ContactTitle id='contact'>Contact me</ContactTitle>
      <PopupsContainer>
        {clicked && <ClickContainer>Copied "sebasalfieri@gmail.com" to clipboard!</ClickContainer>}
      </PopupsContainer>
      <PopupsContainer>
        {isHovering && <HoverContainer>Click to copy e-mail to clipboard</HoverContainer>}
      </PopupsContainer>
      <ContactContainer data-aos="fade-right">
        <ContactBoxContainer>
          <ContactBox
          onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} 
          onClick={handleClick}>
            <IoMdMail/>
          </ContactBox>
          <ContactBoxAnchor href={"https://wa.me/5491122251843"} target="_blank"><IoLogoWhatsapp/></ContactBoxAnchor>
        </ContactBoxContainer>
      </ContactContainer>


    </ContactMainContainer>
  )
}

export default Contact