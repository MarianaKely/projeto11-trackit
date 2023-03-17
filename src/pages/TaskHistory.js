
// General configuration and rendering the history page - outset

import React from "react";
import styled from "styled-components";


// Import files from js pages - outset


import Footer from "../components/Footer";
import Header from "../components/Header";


// Import files from js pages - outset - end


export default function TaskHistory() {
  
  return (


  // Creation configuration of page layout- outset 


    <TaskHistoryContainer>

      <Header />

      <Row>

        <Top>Histórico</Top>

      </Row>


      <Row>

        <SubTitle>Em breve você poderá ver o histórico dos seus hábitos aqui!</SubTitle>

      </Row>

      <Footer />

    </TaskHistoryContainer>

  )

// Creation configuration of page layout- end    

}


// Task History page styling - outset


// styling of the container that holds the whole page -outset


const TaskHistoryContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  padding-top: 90px;
  padding-bottom: 100px;
`


// styling of the container that holds the whole page -end


// styling the top of page - outset


const Top = styled.div`
  color: #126ba5;
  font-size: 23px;
  margin-bottom: 5px;
`


const Row = styled.div`
  max-width: 614px;
  width: 90%;
  display: flex;
  display: ${(props) => (props.hide ? "none" : "flex")};
  justify-content: space-between;
  margin-bottom: 10px;
  
`


const SubTitle = styled.div`
  max-width: 614px;
  width: 90%;
  display: flex;
  display: ${(props) => (props.hide ? "none" : "flex")};
  justify-content: space-between;
  font-size: 18px;
  color: #666666;
  margin-bottom: 10px;
  
`


// styling the top of page - end


// Task History page styling - end


// General configuration and rendering the history page - outset

