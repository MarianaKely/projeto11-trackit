 import React from "react";
 import styled from "styled-components";
 import { useState } from "react";


export default function OneMoreHabit({ displayOnScreen, archive }) {


    const wDays = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [myTitle, setmyTitle] = useState("");
    const [countWeekDays, setCountWeekDays] = useState([]);
    const [loading, setLoading] = useState(false);
    
    function weekDay(index) {
  
      const pass = countWeekDays.includes(index) ? countWeekDays.filter((parameter) => parameter !== index) : [...countWeekDays, index];
        setCountWeekDays(pass)
  
    }
  
  
    function sendArchive(e) {
  
      e.preventDefault()
      setLoading(true)
  
      archive(
  
        {
  
          name: myTitle,
          days: countWeekDays,
  
        },
  
        confirmation,
        theError
  
      )
  
    }
  
  
    function confirmation() {
  
      setmyTitle("");
      setCountWeekDays([])
      setLoading(false)
  
    }
  
  
    function theError() {
  
      setLoading(false)
  
    }
  
  
    return (
  
      <HabitCreateContainer data-test="habit-create-container">
  
        <form onSubmit={sendArchive}>
  
          <Row>
  
            <input placeholder="Nome do hábito" onChange={(e) => setmyTitle(e.target.value)}  value={myTitle}
              disabled={loading} data-test="habit-name-input" />
             
          </Row>
  
  
          <Row>
  
            <MyDays>
  
              {wDays.map((parameter, parametertwo) => (
  
                <Day type="button" set={countWeekDays.includes(parametertwo)} key={parametertwo} disabled={loading}
                 onClick={() => weekDay(parametertwo)} data-test="habit-day" >
                  {parameter}
                </Day>
  
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
  
  }
  
  const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 350px;
    margin-bottom: 10px;
    display: ${(props) => (props.hide ? "none" : "flex")};
  `;
  
  
  const HabitBox = styled.div`
    padding: 5px 10px;
    width: 100%;
    border-radius: 5px;
    background-color: #ffffff;
    color: #666666;
    font-size: 20px;
    ion-icon {
      font-size: 15px;
      cursor: pointer;
    }
  `;
  
  const Day = styled.button`
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    font-size: 20px;
    color: ${(props) => (props.set ? "#ffffff" : "#d8d8d8")};
    background-color: ${(props) => (props.set ? "#d8d8d8" : "#ffffff")};
    width: 30px;
    height: 30px;
  `;
  
  const MyDays = styled.div`
    ${Day} {
      margin-right: 5px;
    }
    ${Day}:last-child {
      margin-left: 0;
    }
  `;
  
  const HabitCreateContainer = styled(HabitBox)`
    padding-top: 15px;
    input {
      width: 95%;
      height: 45px;
      font-size: 20px;
      border-radius: 5px;
      border-width: 1px;
      padding: 0 8px;
      border: 1px solid #dbdbdb;
      &::placeholder {
        color: #dbdbdb;
      }
    }
  `;
  const CancelAndSave = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    width: 100%;
  `;
  
  const Save = styled.button`
    width: 84px;
    height: 35px;
    border-radius: 5px;
    border-width: 0;
    font-size: 16px;
    background-color: #52b6ff;
    color: #ffffff;
    &:hover {
      cursor: pointer;
    }
  `;
  
  const Cancel = styled(Save)`
    background-color: #ffffff;
    color: #52b6ff;
  `;
  
  
  