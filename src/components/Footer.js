

// General configuration and rendering the footer - outset


import React from "react";
import styled from "styled-components";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { UserContext } from "../global/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


export default function Footer() {


// Constants and functions that enable functionalities on the footer page - outset 


  const { dailyschedule } = useContext(UserContext);
  const nextPage = useNavigate();


// Constants and functions that enable functionalities on the footer page - end  

  return (


// Creation configuration of footer layout- outset    


    <ContainerFooterPage data-test="menu">

      <ForwardHabits onClick={() => nextPage("/habitos")} data-test="habit-link">
        Hábitos
      </ForwardHabits>

      <ForwardToday onClick={() => nextPage("/hoje")} data-test="today"> Hoje </ForwardToday>


      <ForwardHistory onClick={() => nextPage("/historico")} data-test="history-link">
        Histórico
      </ForwardHistory>

    </ContainerFooterPage>

  )


// Creation configuration of header layout- outset 


}


// Footer.js page styling - outset


// styling of the container that holds the whole page -outset


const ContainerFooterPage = styled.div`
  max-width: 614px;
  width: 100%;
  height: 70px;
  display: flex;
  background-color: #ffffff;
  justify-content: space-between;
  position: fixed;
  bottom: 0;

`

// styling of the container that holds the whole page -end


//styling the forward buttons - outset


const ForwardHabits = styled.button`
  max-width: 150px;
  width: 50%;
  color: #52b6ff;
  font-size: 18px;
  border-width: 0;
  background-color: #ffffff;
  > :hover {
    background-color: #f2f2f2;
    cursor: pointer;
  }

`

const ForwardToday = styled.button`
  box-sizing: border-box;
  width: 90px;
  height: 90px;
  color: #ffffff;
  font-size: 18px;
  border-radius: 45px;
  border-width: 0;
  background-color: #52b6ff;
  cursor: pointer;
  position: absolute;
  left: calc(50% - 45px);
  bottom: 10px;
  opacity: 0.8;

`

const ForwardHistory = styled.button`
max-width: 150px;
width: 50%;
color: #52b6ff;
font-size: 18px;
border-width: 0;
background-color: #ffffff;
> :hover {
  background-color: #f2f2f2;
  cursor: pointer;
}

`

// styling the forward buttons  - end