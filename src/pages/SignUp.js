
// General configuration and rendering the registration page - outset

import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";



// Import image from assets - outset

import TrackitLogo from "../assets/trackit.svg"

// Import image from assets - end



export default function SignUp() {


// Constants and functions that enable functionalities on the registration page - outset    


  const [profileConfigs, setProfileconfigs] = useState({ name: "", email: "", password: "", image: "",});
  const [loading, setLoading] = useState(false);
  const nextPage = useNavigate();


  function transform(parameter) {

    const { name, value } = parameter.target;

     setProfileconfigs((prev) => ({
      ...prev,
      [name]: value,

    }))

  }


  function registration (parameter) {

    parameter.preventDefault()
    setLoading(true)

    axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, profileConfigs).then((res) => {

        nextPage("/")

// return to login page        

      }).catch((error) => {

        const warning = error.response.data.message || JSON.stringify(error.response.data);

         alert("Erro: " + warning)

         console.log ('error found')

// a warning will be sent to the user if something goes wrong on login   


         setLoading(false)

      })

  }


  // Constants and functions that enable functionalities on the registration page - end  


  return (


// Creation configuration of page layout- outset 


    <ContainerSignUpPage>

      <Link to="/">
       <img src={TrackitLogo} />
      </Link>

      <form onSubmit={registration}>

        <input name="email" type="email" placeholder="email" onChange={transform} required
           value={profileConfigs.email} disabled={loading}  data-test="email-input" />
          
        <input name="password" placeholder="senha" type="password" required  onChange={transform}
           value={profileConfigs.password} disabled={loading} data-test="password-input" />
        
        <input name="name" placeholder="nome" required  disabled={loading}
         onChange={transform} value={profileConfigs.name} data-test="user-name-input" />
           
        <input placeholder="foto" name="image" onChange={transform} required
          disabled={loading} value={profileConfigs.image} data-test="user-image-input" />
          

        <button type="submit" disabled={loading} data-test="signup-btn">

          {loading ? <ThreeDots  
             height="45"
             width="80"
             radius="9"
             color="#FFFFFF"
             ariaLabel="three-dots-loading"
             wrapperStyle={{}}
             wrapperClassName=""
             visible={true} /> : "Cadastrar"}

        </button>

        <Link to="/">
          <a data-test="login-link">Já tem uma conta? Faça login!</a>
        </Link>

      </form>

    </ContainerSignUpPage>


// by clicking on the phrase underlined in blue, the user is taken to the login page
// the button also takes you to the login page


  )


// Creation configuration of page layout- end  


}


// Registration page styling - outset


// styling of the container that holds the whole page, including: image, button and input -outset


const ContainerSignUpPage = styled.div`

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


// Registration page styling - end


// General configuration and rendering the registration page - end