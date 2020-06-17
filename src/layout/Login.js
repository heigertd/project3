import React, { useState } from "react";
import "../layout/style.css";
import { Link, useHistory } from "react-router-dom";
import API from "../utils/API";

import "../components/LogInBtn/style.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [login, setLogin] = useState(false);
  const [logout, setLogout] = useState(false);
  const [userOption, setUserOption] = useState(false);
  let history = useHistory();

  const options = [
    'Manager', 'Employee'
  ];
  const defaultOption = options[0];

  function _onSelect(option) {
    console.log('You selected ', option.label)

    if (option.label === "Manager") {
      setUserOption(true)


    } else if (option.label === "Employee") {
      setUserOption(false)
    }
  }

  const handleLogin = () => {
    console.log(username, password);
    API.login({ username, password }).then((data) => {
      // props.isLogedin(data.data)

      // history.push("/patient")
      if (data.data === "Incorrect password!") {
        console.log("wrongpassword");
      } else if (data.data === "cannot find user!") {
        console.log("no user");

        // history.push("/patient")
      } else {
        props.isLogedin(data.data);
        console.log("success");
        history.push("/patient");
      }
    });
  };
  const handleLogoutClick = (event) => {
    API.Logout().then((res) => {
     setLogout();
         history.push.current('/')
    });
  };

  const handleSignup = () => {
    API.signup({ username, password, isAdmin: userOption }).then((data) =>
      console.log(data)
    );
    console.log("userOption", userOption);
  };

  return (
    <form className="Card">
      <div class="login-page container">
        <div className="row">
          <div className="col s12">
            <div class="register-form">
              <h2>{login ? "Log In" : "Sign Up"}</h2>
              <div>
                <input
                  id="create-name"
                  type="text"
                  placeholder="enter your name"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <input
                id="create-password"
                type="password"
                placeholder="enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div />
              {login ? (
                ""
              ) : (
                <>
                  <Dropdown
                    options={options}
                    value={defaultOption}
                    placeholder="Select an option"
                    onChange={_onSelect}
                  />
                  
                  <div />
                </>
              )}

              <button
                onClick={login ? handleLogin : handleSignup}
                id="create-acc"
              >
                {login ? "Log In" : "Submit"}
              </button>

              

              {login ? (
                <p class="message">
                  Not registered?
                  <a onClick={() => setLogin(false)} href="#">
                    Create an account
                  </a>
                </p>
              ) : (
                <p class="message">
                  Already registered?{" "}
                  <a onClick={() => setLogin(true)} href="#">
                    Log In
                  </a>{" "}
                  <button
                onClick={logout ? handleLogoutClick : ""}
                id="create-acc"
              >
                log out
              </button>
                </p>
                
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
