

// General configuration and rendering the header - outset


import React from "react";
import styled from "styled-components";
import { useContext } from "react";


// Import files from js pages - outset


import { UserContext } from "../global/UserContext";


// Import files from js pages - end


export default function Header() {


// Constants and functions that enable functionalities on the header page - outset   

  const { profileName } = useContext(UserContext);


// Constants and functions that enable functionalities on the header page - end   


  return (


// Creation configuration of header layout- outset    


    <ContainerHeaderPage data-test="header">

      <span>TrackIt</span>
      <img src={profileName.image} />

    </ContainerHeaderPage>

  )


// Creation configuration of header layout- outset     


}


// Header.js page styling - outset


// styling of the container that holds the whole page -outset


const ContainerHeaderPage = styled.div`
  
 box-sizing: border-box;
  max-width: 614px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #126ba5;
  padding: 10px;
  position: fixed;
  top: 0;
  
  span {

    color: #ffffff;
    font-size: 40px;
    font-family: "Playball", cursive;
    
  }

  > img {

    width: 50px;
    height: 50px;
    border-radius: 25px;

  }
  
`


// Header.js page styling - end


// styling of the container that holds the whole page -end


// General configuration and rendering the header - end