import React from 'react';
import {Link} from "react-router-dom";

export default () =>
  <>
    <nav>
      <div class="nav-wrapper">
      
        <a href="#" className="brand-logo center">DAYA App</a>

<div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login 
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/patient"
              className={window.location.pathname === "/patient" ? "nav-link active" : "nav-link"}
            >
              Patient
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/patient/:id"
              className={window.location.pathname === "/manager"? "nav-link active" : "nav-link"}
              
            >
             Manager
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/employee"
              className={window.location.pathname === "/employee" ? "nav-link active" : "nav-link"}
              
            >
             Employee
            </Link>
          </li>
        </ul>

      </div>
      </div>
    </nav>
  </>


