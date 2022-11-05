import React, { useState } from "react";
import styled from "styled-components";

const TopIconContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: flex-end;
  align-items: center;
  width: 98%;
  height: 50px;
  margin-bottom: -50px;
  margin-top: 10px;
`;

const TopIconImg = styled.img`
  height: 50px;
`;

const TopIconImgA = styled.a`
  height: 50px;
`;

function TopIcon() {
  const [scroll, setScroll] = useState(false);
  const changeClass = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeClass);

  return (
    <TopIconContainer>
      <TopIconImgA href="#header">
        <TopIconImg
          src="./images/icon.png"
          className={scroll ? "indicator" : "none"}
        />
      </TopIconImgA>
    </TopIconContainer>
  );
}

export default TopIcon;
