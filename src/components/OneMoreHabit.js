 

 // General configuration and rendering the add habits page - outset


 import React from "react";
 import styled from "styled-components";
 import { useState } from "react";


export default function OneMoreHabit({ displayOnScreen, archive }) {


  // Constants and functions that enable functionalities on the add habits page - outset


    const wDays = ["D", "S", "T", "Q", "Q", "S", "S"]; // represents the days of the week
    const [myTitle, setmyTitle] = useState("");
    const [countWeekDays, setCountWeekDays] = useState([]);
    const [loading, setLoading] = useState(false);

    
    function weekDay(index) {
  
      const pass = countWeekDays.includes(index) ? countWeekDays.filter((parameter) => parameter !== index) : [...countWeekDays, index];
        setCountWeekDays(pass)
  
    }
  
  
    function sendArchive(parameterthree) {
  
      parameterthree.preventDefault()
      setLoading(true)
  
      archive(
  
        {
  
          name: myTitle,
          days: countWeekDays,

// structure of the habit information box          
  
        },
  
        confirmation,
        theError
  
      )
  
    }
  
  
    function confirmation() {
  
      setmyTitle("");
      setCountWeekDays([])
      setLoading(false)

// save the habit      
  
    }
  
  
    function theError() {
  
      setLoading(false)
 
// Don't save the habit      

    }


    // Constants and functions that enable functionalities on the add habits page - end
  
  
    return (


// Creation configuration of page layout- outset 

  
      <HabitCreateContainer data-test="habit-create-container">
  
        <form onSubmit={sendArchive}>
  
          <Row>
  
            <input placeholder="Nome do hábito" onChange={(parameterthree) => setmyTitle(parameterthree.target.value)}  value={myTitle}
              disabled={loading} data-test="habit-name-input" />
             
          </Row>
  
  
          <Row>
  
            <MyDays>
  
              {wDays.map((parameter, parametertwo) => (
  
                <DDay type="button" set={countWeekDays.includes(parametertwo)} key={parametertwo} disabled={loading}
                 onClick={() => weekDay(parametertwo)} data-test="habit-day" >
                  {parameter}
                </DDay>
  
              ))}
  
            </MyDays>
  
          </Row>
  
  
          <Row>
  
            <CancelAndSave>
  
              <Cancel type="button" disabled={loading} onClick={() => displayOnScreen(false)}
                data-test="habit-create-cancel-btn" >  Cancelar </Cancel>
               
              <Save type="submit" disabled={loading} data-test="habit-create-save-btn">
                Salvar
              </Save>
  
            </CancelAndSave>
  
          </Row>
  
        </form>
  
      </HabitCreateContainer>
  
    )


// Creation configuration of page layout- end     

  
  }


// add habit page styling - outset


// styling of the container that holds the whole page -outset  


const HabitCreateContainer = styled.div`
    width: 100%;
    height: 180px;
    color: #666666;
    font-size: 20px;
    border-radius: 5px;
    background-color: #ffffff;
    padding-top: 15px;
    padding: 5px 10px;
    
    input {

      width: 95%;
      height: 45px;
      font-size: 20px;
      border: 1px solid #dbdbdb;
      border-radius: 5px;
      border-width: 1px;
      padding: 0 8px;

      &::placeholder {

        color: #dbdbdb;

      }

    }

  `

// styling of the container that holds the whole page -outset  


// styling each line of information - outset
  
  const Row = styled.div`
    max-width: 614px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    display: ${(props) => (props.hide ? "none" : "flex")};
    margin-bottom: 10px;
    
  `


// styling each line of information - outset  


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


// styling buttons box - outset


const CancelAndSave = styled.div`
    
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    margin-top: 20px;
    
  `


// styling buttons box - end


// styling save button - outset


const Save = styled.button`
    width: 84px;
    height: 35px;
    color: #ffffff;
    font-size: 16px;
    border-radius: 5px;
    border-width: 0;
    background-color: #52b6ff;
    cursor: pointer;

  `
  

// styling save button - end


// styling cancel button - outset


const Cancel = styled.button`
   width: 84px;
   height: 35px;
   color: #52b6ff;
   font-size: 16px;
   border-radius: 5px;
   border-width: 0;
   background-color: #ffffff;
   cursor: pointer;

`


// styling cancel button - end



// add habit page styling - end
  
  
  
   // General configuration and rendering the add habits page - end