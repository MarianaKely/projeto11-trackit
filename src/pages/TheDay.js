
// General configuration and rendering the today page - outset


import React from "react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";



// Import files from js pages - outset


import { hiddenHabits } from "../global/Analysis";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { UserContext } from "../global/UserContext";


// Import files from js pages - outset


export default function TheDay() {


// Constants and functions that enable functionalities on the today page - outset  

 
  const { profileName, dailyschedule, setDailySchedule } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  

  function appointmentConfirmation(parameter) {

    if (loading) return
    setLoading(true)

    axios.post(` https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${parameter.id}/${parameter.done}/uncheck` || ` https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${parameter.id}/${parameter.done}/check` ,
   
        {

          headers: {

            Authorization: `Bearer ${profileName.token}`,
            
          },

        }

      ).then((res) => {

        setDailySchedule( dailyschedule.map((myhabits) =>

            parameter.id === myhabits.id ? { ...myhabits, done: !parameter.done } : { ...myhabits }

          )

        )

        setLoading(false)
        hiddenHabits(setLoading)

      }).catch((error) => {

        alert(`Erro: ${JSON.stringify(error.response.data)}`)
        setLoading(false)

      })

  }


  const finishedHabits = dailyschedule ? dailyschedule.filter((parameter) => parameter.done).length: 0;
  const allHabits = dailyschedule ? dailyschedule.length : 0;

  

    


  useEffect(() => {

    hiddenHabits()

  },

   [])


  // Constants and functions that enable functionalities on the today page - outset  

  return (


// Creation configuration of page layout- outset 


    <ContainerTheDayPage>

      <Header />

      <Row>

        <Outset>

          <Top data-test="today"></Top>

          <Percentageofhabits done={finishedHabits} data-test="today-counter">
            {finishedHabits ? `${((finishedHabits * 100) / allHabits).toFixed( 0 )}% ${"dos hábitos concluídos"}`: "Nenhum hábito concluído ainda"}
          </Percentageofhabits>

        </Outset>

      </Row>


      <Row>

        <Habit>

          {dailyschedule && dailyschedule.map((parameter) => (

              <IndividualHabit done={parameter.done} key={parameter.id} data-test="today-habit-container" >
            
                <div>
                  <h1 data-test="today-habit-name">{parameter.name}</h1>
                  <p data-test="today-habit-sequence">
                    Sequência atual:&nbsp;

                    <PerformanceEvaluation highlight={parameter.done}>
                      {`${parameter.currentSequence} ${parameter.currentSequence === 1 ? "dia" : "dias"}`}
                    </PerformanceEvaluation>

                  </p>

                  <p data-test="today-habit-record">
                    Recorde atual:&nbsp;

                    <PerformanceEvaluation highlight={parameter.currentSequence === parameter.highestSequence}>
                      {` ${parameter.highestSequence} ${parameter.highestSequence === 1 ? "dia" : "dias"}`}
                    </PerformanceEvaluation>

                  </p>

                </div>


                <button onClick={() => appointmentConfirmation(parameter)} data-test="today-habit-check-btn" >
                  <ion-icon name="checkmark-outline"></ion-icon>
                </button>

              </IndividualHabit>

            ))}

        </Habit>

      </Row>

      <Footer />

    </ContainerTheDayPage>

  )


// Creation configuration of page layout- end 


}


// Today page styling - outset


// styling of the container that holds the whole page -outset


const ContainerTheDayPage = styled.div`
  padding-top: 90px;
  padding-bottom: 100px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`

// styling of the container that holds the whole page -end


// styling the top of page - outset

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 350px;
  margin-bottom: 10px;
  display: ${(props) => (props.hide ? "none" : "flex")};
`

const Outset = styled.div`
  width: 100%;
  padding-left: 5px;
`

// styling the date -outset

const Top = styled.div`
color: #126ba5;
font-size: 23px;
margin-bottom: 5px;
`

// styling the date - end


// styling the subtitles: percents - outset


const Percentageofhabits = styled.div`
  color: ${(props) => (props.done > 0 ? "#8FC549" : "#BABABA")};
  font-size: 18px;
`

// styling the subtitles: percents - end


// styling the top of page - end


// styling my habits space - outset


const Habit = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
`


// styling each habit - outset


const IndividualHabit = styled.div`
  max-width: 340px;
  width: 100%;
  height: 94px;
  border-radius: 5px;
  display: flex;
  background-color: #ffffff;
  margin-bottom: 10px;
  align-items: center;
  div {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 10px;
    color: #666666;
    h1 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    p {
      font-size: 13px;
      display: flex;
    }
  }
  button {
    background-color: #ffffff;
    width: 20%;
    height: 80%;
    border-radius: 5px;
    border-width: 0;
    background-color: ${(props) => (props.done ? "#8fc549" : "#E7E7E7")};
    color: white;
    ion-icon {
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0);
      color: "#ffffff";
    }
  }
`

// styling evolution of habits : percents - outset


const PerformanceEvaluation = styled.p`
  color: ${(props) => (props.highlight ? "#8FC549" : "#666666")};
`


// styling evolution of habits : percents - end


// styling each habit - outset


// styling my habits space - end


// styling of the container that holds the whole page -end


// Today page styling - end


// General configuration and rendering the today page - outset




