

// General configuration and rendering the habits page - outset

import React from "react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";


// Import files from js pages - outset


import { UserContext } from "../global/UserContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OneMoreHabit from "../components/OneMoreHabit";


// Import files from js pages - end


export default function MyHabits() {


  // Constants and functions that enable functionalities on the habits page - outset


  const wDays = ["D", "S", "T", "Q", "Q", "S", "S"]; // represents the days of the week
  const { profileName, singleHabit, listed, hiddenHabits } = useContext(UserContext);
  const [plusOne, setPLusOne] = useState(false);
  const [loading, setLoading] = useState(false);


  function erase (task) {

    if (!window.confirm("Gostaria realmente de apagar o hábito?")) return

    axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${task.id}`, {


// function that serves to delete a previously saved habit    


        headers: {
          Authorization: `Bearer ${profileName && profileName.token}`,
        },

      }
      ).then((res) => {

        console.log(res.data)
        hiddenHabits()
        listed()

      }
      ).catch((error) => {

        alert(JSON.stringify(error.response.data))
        console.log ('error found')

      }

// a warning will be sent to the user if something goes wrong   

      
      )

  }

  function keepInformation (task, confirmation, theError) {

    axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, task, {


// save a habit that was just created


        headers: {
          Authorization: `Bearer ${profileName.token}`,
        },

      }

      ).then((res) => {

        console.log(res.data)
        if (confirmation) confirmation()
        setPLusOne(false)
        listed()
        hiddenHabits()

      }
      ).catch((error) => {

        alert(JSON.stringify(error.response.data))
        if (theError) theError()


// a warning will be sent to the user if something goes wrong     


      }
      
      )

  }


// Constants and functions that enable functionalities on the login page - end  


  useEffect(() => {listed(setLoading); }, [])


  return (


// Creation configuration of page layout- outset 


    <MyHabitsPageContainer>

      <Header />

      <Row>

        <Top>

          <span>Meus hábitos</span>{" "}

          <PlusButton onClick={() => setPLusOne(!plusOne)} data-test="habit-create-btn">
            +
          </PlusButton>

        </Top>

      </Row>


      <Row hide={!plusOne}>

        <OneMoreHabit displayOnScreen={setPLusOne} archive={keepInformation} />

      </Row>

      {loading ? ( <ThreeDots  

        height="45"
        width="80"
        radius="9"
        color="#FFFFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true} /> ) : singleHabit && singleHabit.length > 0 ? (singleHabit.map((task) => (

          <Row key={task.id}>

            <HabitBox data-test="habit-container">

              <Row>

                <span data-test="habit-name">{task.name}</span>

                <ion-icon name="trash-outline" onClick={() => erase (task)} data-test="habit-delete-btn"></ion-icon>

              </Row>


              <Row>

                <MyDays>

                  {wDays.map((parameter, parametertwo) => (

                    <DDay key={parametertwo} set={task.days.includes(parametertwo)} data-test="habit-day">
                      {parameter}
                    </DDay>

                  ))}

                </MyDays>

              </Row>

            </HabitBox>

          </Row>

        )
        
        )

      ) : (

        <Message>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Message>

      )

// clicking on the ion-icon will delete your habit permanently      
      
      }

      <Footer />

    </MyHabitsPageContainer>

  )


// Creation configuration of page layout- end

  
}


// MyHabits page styling - outset


// styling of the container that holds the whole page -outset


const MyHabitsPageContainer = styled.div`
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


// Styling page title - outset


const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #126ba5;
  font-size: 23px;
  margin-bottom: 5px;
  
`


// Styling page title - end


// styling each line of information - outset


const Row = styled.div`
  max-width: 614px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  display: ${(props) => (props.hide ? "none" : "flex")};
  margin-bottom: 10px;
 
`

// styling each line of information - outset


// styling the button that opens the add habit form - ouset


const PlusButton = styled.button`
  width: 40px;
  height: 35px;
  color: #ffffff;
  font-size: 27px;
  border-width: 0;
  border-radius: 5px;
  background-color: #52b6ff;
  cursor: pointer;

`

// styling the button that opens the add habit form - end


// styling the box every habit - ouset


const HabitBox = styled.div`
  width: 100%;
  color: #666666;
  font-size: 20px;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 5px 10px;

  ion-icon {
    font-size: 20px;
    cursor: pointer;
  }

`

// styling the box every habit - end


// styling each week day - outset


const DDay = styled.button`
  width: 30px;
  height: 30px;
  color: ${(props) => (props.set ? "#ffffff" : "#d8d8d8")};
  font-size: 20px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  background-color: ${(props) => (props.set ? "#d8d8d8" : "#ffffff")};
 

`


// styling each week day - end


// styling week days box - ouset


const MyDays = styled.div`
  ${DDay} {
    margin-right: 5px;
  }
  ${DDay}:last-child {
    margin-left: 0;
  }

`

// styling week days box - end





// styling message that appears if there are no habits - outset


const Message = styled.div`
   max-width: 614px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 10px;
   display: ${(props) => (props.hide ? "none" : "flex")};
   font-size: 18px;
   color: #666666;

`

// styling message that appears if there are no habits - end


// MyHabits page styling - end


// General configuration and rendering the habits page - end

