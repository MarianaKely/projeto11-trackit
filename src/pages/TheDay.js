

// General configuration and rendering the today page - outset


import React from "react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";


// Import files from js pages - outset


import Footer from "../components/Footer";
import Header from "../components/Header";
import { UserContext } from "../global/UserContext";


// Import files from js pages - end


export default function TheDay() {


    // Constants and functions that enable functionalities on the today page - outset


  const today = dayjs().locale("pt-br").format("dddd, DD/MM");
  const { profileName, dailyschedule, setDailySchedule, hiddenHabits } = useContext(UserContext);
  const [loading, setLoading] = useState(false);


  function appointmentConfirmation(parameter) {

    if (loading) return
    setLoading(true)

    axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${parameter.id}/${parameter.done ? "uncheck" : "check"}`,{},

        {

          headers: {
            Authorization: `Bearer ${profileName.token}`,
          },

        }

      ).then((res) => {

        setDailySchedule(

          dailyschedule.map((usual) =>

          parameter.id === usual.id ? { ...usual, done: !parameter.done } : { ...usual }

          )

        )

        setLoading(false)
        hiddenHabits(setLoading)

      }
      
     ).catch((error) => {

        alert(`Erro: ${JSON.stringify(error.response.data)}`)
        setLoading(false)


// a warning will be sent to the user if something goes wrong   


      })

  }

  const finishedHabits = dailyschedule ? dailyschedule.filter((parameter) => parameter.done).length : 0;
  const allHabits = dailyschedule ? dailyschedule.length : 0;


  // Constants and functions that enable functionalities on the today page - end  


  useEffect(() => { hiddenHabits();}, []);

  return (


// Creation configuration of page layout- outset 


    <TheDayPageContainer>

      <Header />

      <Row>

        <Outset>

          <Top data-test="today">{today}</Top>

          <Percentage done={finishedHabits} data-test="today-counter">
            {finishedHabits ? `${((finishedHabits * 100) / allHabits).toFixed( 0 )}% ${"dos hábitos concluídos"}`: "Nenhum hábito concluído ainda"}
          </Percentage>

        </Outset>

      </Row>


      <Row>

        <TodayHabit> {dailyschedule && dailyschedule.map((parameter) => (

              <HabitBox done={parameter.done} key={parameter.id} data-test="today-habit-container">

                <div>

                  <h1 data-test="today-habit-name">{parameter.name}</h1>
                  <p data-test="today-habit-sequence">
                   Sequência atual:&nbsp;
                    <CurrentSequence highlight={parameter.done}>
                        {`${ parameter.currentSequence } ${parameter.currentSequence === 1 ? "dia" : "dias"}`}
                    </CurrentSequence>
                  </p>

                  <p data-test="today-habit-record">
                   Seu recorde:&nbsp;
                    <MyRecord highlight={parameter.currentSequence === parameter.highestSequence}>
                        {` ${parameter.highestSequence} ${parameter.highestSequence === 1 ? "dia": "dias"}`}
                    </MyRecord>
                  </p>

                </div>

                <button onClick={() => appointmentConfirmation(parameter)} data-test="today-habit-check-btn">
                  <ion-icon name="checkmark-outline"></ion-icon>
                </button>

              </HabitBox>

            ))}

        </TodayHabit>

      </Row>

      <Footer />

    </TheDayPageContainer>

  )


// Creation configuration of page layout- end 


}


// MyHabits page styling - outset


// styling of the container that holds the whole page -outset


const TheDayPageContainer = styled.div`
   max-width: 614px;
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


// styling each line of information - outset


const Row = styled.div`
  width: 100%;
  display: flex;
  display: ${(props) => (props.hide ? "none" : "flex")};
  justify-content: space-between;
  margin-left: 15%;
  margin-bottom: 10px;

`


// styling each line of information - end


// styling the top box - outset


const Outset = styled.div`
  width: 100%;
  padding-left: 5px;
  
`

// styling the top box - end


// Styling page title - outset


const Top = styled.div`
color: #126ba5;
font-size: 23px;
margin-bottom: 5px;

`

// Styling page title - end


// styling percentage phrase -outset


const Percentage = styled.div`
  color: ${(props) => (props.done > 0 ? "#8FC549" : "#BABABA")};
  font-size: 18px;

`

// styling percentage phrase - end


// styling container habits of the day - ouset


const TodayHabit = styled.div`
  max-width: 614px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;

`

// styling container habits of the day - end


// styling each indivual habit box - outset
const HabitBox = styled.div`

  max-width: 614px;
  width: 90%;
  height: 94px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: #FFFFFF;
  margin-bottom: 20px;
  
    div {

    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #666666;
    padding: 0px 10px;
    
      h1 {

      font-size: 15px;
      font-weight: 400;
      color: #666666;
      margin-top: 30px;

    }

    p {
      
      display: flex;
      font-size: 13px;
      margin-top: 0px;

    }

  }

  button {
    
    width: 20%;
    height: 80%;
    color: white;
    border-radius: 5px;
    border-width: 0;
    background-color: #ffffff;
    background-color: ${(props) => (props.done ? "#8fc549" : "#E7E7E7")};
    
    ion-icon {

      width: 100%;
      height: 100%;
      color: "#ffffff";
      background-color: rgba(0, 0, 0, 0);

    }

  }


`


// styling each indivual habit box - end


// Styling the sequence percentage phras - ouset


const CurrentSequence = styled.p`
  color: ${(props) => (props.highlight ? "#8FC549" : "#666666")};
  
`

// Styling the sequence percentage phras - end


// Styling the record percentage phras - outset

const MyRecord = styled.p`
  color: ${(props) => (props.highlight ? "#8FC549" : "#666666")};

`

// Styling the record percentage phras - end


// MyHabits page styling - end


// General configuration and rendering the today page - end
