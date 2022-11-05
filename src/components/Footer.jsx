import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 50px;
  background-color: #242021;
`;

function Footer() {
  return <FooterContainer>Sebastian Alfieri</FooterContainer>;
}

export default Footer;
