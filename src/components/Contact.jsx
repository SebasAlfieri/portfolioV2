import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactMainContainer = styled.div`
  color: #242021;
  font-size: 1.5rem;
  margin: auto;
  height: fit-content;
  margin-top: -70px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const ContactTitle = styled.h2`
  display: flex;
  justify-content: center;
  margin-left: 0;
  font-size: 2rem;
  font-weight: 600;
  @media (min-width: 768px) {
    justify-content: flex-start;
    margin-left: 50px;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
  width: 200px;
  height: 100px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    width: 400px;
    height: 200px;
  }
`;

const ContactBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 250px;
  margin-top: -40px;

  @media (min-width: 768px) {
    width: 700px;
    margin-top: 10px;
  }
`;

const ContactBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  font-size: 4rem;
  transition: 0.1s;
  background-color: #242021;
  border-radius: 25px;

  &:active {
    color: #c7c7c7;
    background-color: #322d2e;
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 150px;
    font-size: 7rem;
  }
`;

const ContactBoxAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  font-size: 4rem;
  transition: 0.1s;
  color: #ffffff;
  background-color: #242021;
  border-radius: 25px;

  &:active {
    color: #c7c7c7;
    background-color: #322d2e;
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 150px;
    font-size: 7rem;
  }
`;

const HoverContainer = styled.div`
  position: relative;
  text-align: center;
  bottom: 15px;
  background-color: #242021;
  color: white;
  padding: 5px;
  border-radius: 25px;
  width: 300px;
  font-size: 1rem;
  margin: auto;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const ClickContainer = styled.div`
  position: relative;
  text-align: center;
  top: 190px;
  background-color: #242021;
  color: white;
  padding: 5px;
  border-radius: 25px;
  width: 300px;
  font-size: 0.8rem;
  margin: auto;
  animation-duration: 3s;
  animation-name: fadeOut;
  animation-iteration-count: infinite;

  @media (min-width: 768px) {
    width: 400px;
    top: 50px;
    font-size: 1rem;
  }
`;

const PopupsContainer = styled.div`
  height: 30px;
`;

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
    navigator.clipboard.writeText("sebasalfieri@gmail.com");
  };

  return (
    <ContactMainContainer>
      <ContactTitle id="contact">Contact me</ContactTitle>
      <PopupsContainer>
        {clicked && (
          <ClickContainer>
            Copied "sebasalfieri@gmail.com" to clipboard!
          </ClickContainer>
        )}
      </PopupsContainer>
      <PopupsContainer>
        {isHovering && (
          <HoverContainer>Click to copy e-mail to clipboard</HoverContainer>
        )}
      </PopupsContainer>
      <ContactContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <ContactBoxContainer>
          <ContactBox
            onClick={handleClick}
            as={motion.div}
            whileHover={{ scale: 1.05 }}
          >
            <IoMdMail />
          </ContactBox>
          <ContactBoxAnchor
            as={motion.a}
            whileHover={{ scale: 1.05 }}
            href={"https://wa.me/5491122251843"}
            target="_blank"
          >
            <IoLogoWhatsapp />
          </ContactBoxAnchor>
        </ContactBoxContainer>
      </ContactContainer>
    </ContactMainContainer>
  );
}

export default Contact;
