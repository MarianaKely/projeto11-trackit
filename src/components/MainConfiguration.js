

// General configuration and rendering the main config page - outset


import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";


// Import files from js pages - outset

import { UserContext } from "../global/UserContext";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { hiddenHabits, listed } from "../global/Analysis";
import TaskHistory from "../pages/TaskHistory";
import TheDay from "../pages/TheDay";
import MyHabits from "../pages/MyHabits";


// Import files from js pages - end




export default function MainConfiguration () {


// Constants and functions that enable functionalities on the header page - outset   
  
  
    const [profileName, setProfileName] = useState({});
    const [singleHabit, setSingleHabit] = useState([]);
    const [dailyschedule, setDailySchedule] = useState([]);


// Constants and functions that enable functionalities on the header page - end    
    
  
    return (


// Creation configuration of main config layout- outset    


      <MainContainer>


        <UserContext.Provider value={{

            profileName,
            setProfileName,
            singleHabit,
            setSingleHabit,
            dailyschedule,
            hiddenHabits: () => hiddenHabits(profileName, setDailySchedule),
            listed: (setLoading) => listed(profileName, setSingleHabit, setLoading),

          }} >

          <BrowserRouter>

            <Routes>

              <Route path="/" element={<SignIn />} />
              <Route path="/cadastro" element={<SignUp />} />
              <Route path="/hoje" element={<TheDay/>} />
              <Route path="/habitos" element={<MyHabits/>} />
              <Route path="/historico" element={<TaskHistory/>} />
              
            </Routes>

          </BrowserRouter>

        </UserContext.Provider>

      </MainContainer>

    )


// Creation configuration of main config layout- outset    



  }


// MainConfiguration.js page styling - outset  


// styling of the container that holds the whole site -outset

  
  const MainContainer = styled.div`

    max-width: 614px;
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;

  `


// styling of the container that holds the whole site -end  


// MainConfiguration.js page styling - end  


// General configuration and rendering the main config page - outset
  