import React, { useState } from "react";
import "../layout/style.css";
import { Link, useHistory } from "react-router-dom";
//
// import LogInBtn from '../LogInBtn';
import API from "../utils/API";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [login, setLogin] = useState(false);
  let history = useHistory();
  // when axios

  const handleLogin = () => {
    console.log(username, password);
    API.login({ username, password }).then((data) => {
      props.isLogedin(data.data);

      // history.push("/patient")
      if (data.data === "Incorrect password!") {
        console.log("wrongpassword");
      } else if (data.data === "cannot find user!") {
        console.log("no user");
        // history.push("/patient")
      } else {
        history.push("/patient");
      }
    });
  };

  const handleSignup = () => {
    API.signup({ username, password, code }).then((data) => console.log(data));
  };


  return (
    <div class="ui placeholder segment">
    <div class="ui two column very relaxed stackable grid">
      <div class="column">
        <div class="ui form">
          <div class="field">
            <h2>{login ? "Log In" : "Sign Up"}</h2>
            <div>
              <input id="create-name" type="text" placeholder="Name" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <input id="create-password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><div />
            {login ? "" : <><input type="text" placeholder="Registration Code" onChange={(e) => setCode(e.target.value)} /><div /></>}
            <button onClick={login ? handleLogin : handleSignup} id="create-acc">{login ? "Log In" : "Submit"}</button>
            {login ? <p class="message">Not registered?
          <a onClick={() => setLogin(false)} href="#">
                 Create an account</a></p> : <p class="message">Already registered? <a onClick={() => setLogin(true)} href="#">Log In</a>  </p>
            }
          </div>
        </div>
      </div>
    </div>
  </div>
  )
        }
export default Login;
