import React, { useState } from 'react'
import styled from "styled-components"
import { IoIosArrowDown } from 'react-icons/io';



const IndicatorV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  width: 100%;
  height: 50px;
  text-align: center;
  transition: 0.3s;
`

function Indicator() {

  const [scroll, setScroll] = useState(false);
  const changeClass=()=>{
    const scrollValue=document.documentElement.scrollTop;
    if(scrollValue>50)
    {
      setScroll(true);
    }
    else{
      setScroll(false);
    }
  }

  
  window.addEventListener('scroll', changeClass);

  return (
    <IndicatorV><IoIosArrowDown className={scroll ?"none":"indicator"}/></IndicatorV>
  )
}

export default Indicator