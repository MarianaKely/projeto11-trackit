

// General configuration and rendering the login page - outset

import React from "react";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";


// Import files from js pages - outset


import { UserContext } from "../global/UserContext";


// Import files from js pages - end



// Import image from assets - outset

import TrackitLogo from "../assets/trackit.svg"

// Import image from assets - end



export default function SignIn() {


// Constants and functions that enable functionalities on the login page - outset  


  const [applicationsettings, setApplicationsettings] = useState({ password: "", email: "" });
  const { setProfileName} = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const nextPage = useNavigate();


  function transform (parameter) {

    const { name, value } = parameter.target;
    setApplicationsettings((stringParser) => ({

      ...stringParser,
      [name]: value,

    }))

  }


  function entertheAccount (parameter) {

    parameter.preventDefault();
    setLoading(true);

    axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, applicationsettings).then((res) => {
        
      const profileName = res.data;

          setProfileName(profileName)
          nextPage("/hoje")


// forward to page of habits to be done in the current day


        }).catch((error) => {

          const warning = error.response.data.message || JSON.stringify(error.response.data);

           alert("Erro: " + warning)

// a warning will be sent to the user if something goes wrong on login        

           console.log ('error found')

           setLoading(false)

      })

  }

// Constants and functions that enable functionalities on the login page - end  


  return (


// Creation configuration of page layout- outset 


    <ContainerSignInPage>

      <Link to="/">
       <img src={TrackitLogo} />
      </Link>

      <form onSubmit={entertheAccount}>

        <input name="email" placeholder="email" type="email" value={applicationsettings.email}  required
           onChange={transform}  disabled={loading} data-test="email-input" />
        
        <input name="password" placeholder="senha"  type="password" value={applicationsettings.password} required
           onChange={transform} disabled={loading} data-test="password-input" />
          
       
       <button type="submit" disabled={loading} data-test="login-btn" >

           {loading ? <ThreeDots  
             height="45"
             width="80"
             radius="9"
             color="#FFFFFF"
             ariaLabel="three-dots-loading"
             wrapperStyle={{}}
             wrapperClassName=""
             visible={true} /> : "Entrar"}

         </button>
       

      </form>

      <Link to="/cadastro">
        <a data-test="signup-link">Não tem uma conta? Cadastre-se!</a>
      </Link>

    </ContainerSignInPage>


// by clicking on the phrase underlined in blue, the user is taken to the registration page


  )


// Creation configuration of page layout- end


}


// Login page styling - outset


// styling of the container that holds the whole page, including: image, button and input -outset


const ContainerSignInPage = styled.div`

  max-width; 614px;
  width: 100%;
  hight:100%;
  display: flex;
  align-items: center;
  flex-direction: column;

   form {
     display: flex;
     flex-direction: column;
     align-items: center;

}

   img {
     width: 180px;
     height: 190px;
     margin-top: 25px;
     margin-bottom: 40px;
     
}

  input {
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-radius: 5px;
    border-width: 1px;
    border: 1px solid #DBDBDB;
    background-color: #F2F2F2;
    padding: 8px;
    margin-bottom: 5px;
    
}
  
  button {
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 21px;
    border-radius: 5px;
    border-width: 0;
    margin-bottom: 5px;
    background-color: #52b6ff;
    cursor: pointer;

}
  
  a {
    color: #52b6ff;
    font-size: 14px;
    margin-top: 20px;
    cursor: pointer;
    text-decoration: underline;
    
}
`

// styling of the container that holds the whole page, including: image, button and input -end


// Login page styling - end


// General configuration and rendering the login page - end

