import React, { useState } from 'react'
import "../components/LogInBtn/style.css";
import { Link, useHistory } from 'react-router-dom'
//
// import LogInBtn from '../LogInBtn';
import API from "../utils/API"

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [login, setLogin] = useState(false);
  let history = useHistory()
  // when axios

  const handleLogin = () => {
    console.log(username, password)
    API.login({ username, password }).then(data => props.isLogedin(data.data))
    history.push("/patient")
  }

  const handleSignup = () => {
    API.signup({ username, password, code }).then(data => console.log(data))
  }



  return (

    <div class="login-page container">
      <div className="row">

        <div className='col s12'>
          <div class="register-form">
            <h2>{login ? "Log In" : "Sign Up"}</h2>
            <div>
              <input id="create-name" type="text" placeholder="enter your name" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <input id="create-password" type="password" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)} /><div />
            {login ? "" : <><input type="text" placeholder="registration code" onChange={(e) => setCode(e.target.value)} /><div /></>}


            <button onClick={login ? handleLogin : handleSignup} id="create-acc">{login ? "Log In" : "Submit"}</button>


            {login ? <p class="message">Not registered?
            <a onClick={() => setLogin(false)} href="#">


                Create an account</a></p> : <p class="message">Already registered? <a onClick={() => setLogin(true)} href="#">Sign In</a>  </p>














            }
          </div>
        </div>

      </div>


    </div>
  )


}

export default Login;

