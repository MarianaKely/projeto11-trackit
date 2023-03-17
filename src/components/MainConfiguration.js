
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "../global/UserContext";
import styled from "styled-components";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
 import { hiddenHabits, listed } from "../global/Analysis";
 import TaskHistory from "../pages/TaskHistory";
 import TheDay from "../pages/TheDay";
 import MyHabits from "../pages/MyHabits";




export default function MainConfiguration () {
    const [profileName, setProfileName] = useState({});
    const [singleHabit, setSingleHabit] = useState([]);
    const [dailyschedule, setDailySchedule] = useState([]);
    
  
    return (

      <Container>


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

      </Container>

    );

  }
  
  const Container = styled.div`
    max-width: 614px;
    width: 100%;
    hight: 100%;
  `;
  