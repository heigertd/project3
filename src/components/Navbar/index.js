



  import React from 'react';
import {Link} from "react-router-dom";

export default (props) => {
  console.log("props.currentUser",props.currentUser)
  return(
  <>
    <nav>
      <div class="nav-wrapper">

        <a href="#" className="brand-logo center">DAYA App</a>

<div>
        <ul className="navbar-nav">
          <li className="nav-item">
          {props.currentUser.user? <h3>Welcome, {props.currentUser.user.username}</h3>:""}
         
          </li>
          <li className="nav-item">
          {props.currentUser? <Link
              to="/patient"
              className={window.location.pathname === "/patient" ? "nav-link active" : "nav-link"}
            >
              Patient
            </Link>:""}
          </li>
<li className="nav-item">
              <Link
              to="/employee"
              className="nav-link"
            >
            Logbook
            </Link>:""}
          </li>
      {props.currentUser.isAdmin ?
        <>
          <li className="nav-item">
          <Link
              to="/manager"
              className="nav-link"
            >
             Manager
            </Link>
          </li>
          

          <li className="nav-item">
          <Link
              to="/patient"
        

            >
             AddEmployee
            </Link>
          </li>
          <li className="nav-item">
          <Link
              to="/manger"
      
            >
             Addpatient
            </Link>:""}
          </li>
          <li className="nav-item">
          {props.currentUser? <Link
              to="/manager"
              className={window.location.pathname === "/manager" ? "nav-link active" : "nav-link"}

            >
            AddManager
            </Link>:""}
          </li>
          </> : ""}

          {props.currentUser ? <li className="nav-item">
          <Link
              to="/"
              className="nav-link">
              Log Out
            </Link>
          </li> : <>
          <li className="nav-item">
          <Link
              to="/"
              className="nav-link">
              Login 
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="signup"
             className="nav-link"
            >
          Sign Up
            </Link>
          </li>
          </>}
          

        </ul>

      </div>
      </div>
    </nav>
  </>
  )}

