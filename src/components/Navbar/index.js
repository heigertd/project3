import React from 'react';
import {Link} from "react-router-dom";

export default (props) => {
  console.log(props)
  return(
    <nav>
    <div className='nav-wrapper'>
      <a href="#" className="brand-logo center">DAYA App</a>
    
    <ul className='navbar-nav'>
      <li className='nav-item'>
        {props.currentUser ? <h3>Welcome, {props.currentUser.username}</h3> : ""}
      </li>
      {props.currentUser ?
        <div>
          <li className='nav-item'>
            <Link to="/patient" className={window.location.pathname === "/patient" ? "nav-link active" : "nav-link"}>
              Patient
              </Link>:
          </li>
          <li className='nav-item'>
            <Link to="/patients" className="nav-link">
              Logbook
              </Link>
          </li>
        </div> : ''}
      {props.currentUser.user && props.currentUser.user.isAdmin ?
        <div>
          <div>
            <li className="nav-item">
              <Link to="/patients" className="nav-link">
                Manager
                </Link>
            </li>
            <li className="nav-item">
              <Link to="/employee">
                AddEmployee
                </Link>
            </li>
            <li className="nav-item">
              <Link to="/newEntry">
                Addpatient
                </Link>
            </li>
          </div>
          {props.currentUser.user ?
            <div>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Log Out
                  </Link>
              </li>
            </div>
            : 
            <div>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>}
        </div>
      : ''}
    </ul>
    </div>
  </nav>
  )
}