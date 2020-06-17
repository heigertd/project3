import React from 'react';
import { Link } from "react-router-dom";

export default (props) => {
  console.log("props.currentUser", props.currentUser.user)

  return (
    <nav>
      <div className='nav-wrapper'>
        <a href="#" className="brand-logo right " >DAYA App</a>

        <ul className='navbar-nav'>
          <li className='nav-item'>
            {props.currentUser.user ? <h5>Welcome, {props.currentUser.user.username}</h5> : ""}
          </li>

          {props.currentUser.user ?
            <>
              {/* <li className='nav-item'>
          <Link to="/login" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
            Login
            </Link>
        </li> */}

              <li className='nav-item'>
          <Link to="/patients" className="nav-link">
          
            </Link>
        </li>
        
            </> : 

           ""
            
            
           
            
            
            }

          {props.currentUser.user && props.currentUser.user.isAdmin ?
            <div>
                <>
              <div>
                
             
                <li className="nav-item">
                  <Link to="/patient" className="nav-link">
                    Manager
              </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/api/employee">
                    AddEmployee
              </Link>
                </li> */}
                <li className="nav-item">
                  <Link to="/newEntry">
                    Addpatient
              </Link>
                </li>
              </div>
           
              
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Log Out
                </Link>
                  </li>
                </>
              
                <div>
                  {/* <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Login
              </Link>
                  </li> */}
                  {/* <li className="nav-item">
                    <Link to="signup" className="nav-link">
                      Sign Up
              </Link>
                  </li> */}
                </div>
            </div>

            : ""}

        </ul>
      </div>
    </nav>
  )
}


