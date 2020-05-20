



  import React from 'react';
import {Link} from "react-router-dom";

export default (props) => {
  console.log("props.currentUser",props.currentUser.user)
//   return(
//   <>
//     <nav>
//       <div class="nav-wrapper">

//         <a href="#" className="brand-logo center">DAYA App</a>

// <div>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//           {props.currentUser && props.currentUser.user? <h3>Welcome, {props.currentUser.user.username}</h3>:" login"}
         
//           </li>
//           <li className="nav-item">
//           {props.currentUser? <Link
//               to="/patient"
//               className={window.location.pathname === "/patient" ? "nav-link active" : "nav-link"}
//             >
//               Patient
//             </Link>:""}
//           </li>
// <li className="nav-item">
//               <Link
//               to="/patients"
//               className="nav-link"
//             >
//             Logbook
//             </Link>:""}
//           </li>
//       {props.currentUser &&props.currentUser.user && props.currentUser.user.isAdmin ?
      
//         <>
//           <li className="nav-item">
//           <Link
//               to="/patients"
//               className="nav-link"
//             >
//              Manager
//             </Link>
//           </li>
          

//           <li className="nav-item">
//           <Link
//               to="/employee"
        

//             >
//              AddEmployee
//             </Link>
//           </li>
//           <li className="nav-item">
//           <Link
//               to="/newEntry"
      
//             >
//              Addpatient
//             </Link>:""}
//           </li>
//           <li className="nav-item">
//           {props.currentUser &&props.currentUser.user? <Link
//               to="/manager"
//               className={window.location.pathname === "/manager" ? "nav-link active" : "nav-link"}

//             >
//             AddManager
//             </Link>:""}
//           </li>
//           <Link
//               to="/"
//               className="nav-link">
//               Log Out
//             </Link>
//           </> : ""}

//           {props.currentUser &&props.currentUser.user ? <li className="nav-item">
//           <Link
//               to="/"
//               className="nav-link">
//               Log Out
//             </Link>
//           </li> : <>
//           <li className="nav-item">
//           <Link
//               to="/"
//               className="nav-link">
//               Login 
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="signup"
//              className="nav-link"
//             >
//           Sign Up
//             </Link>
//           </li>
//           </>}
          

//         </ul>

//       </div>
//       </div>
//     </nav>
//   </>
//   )}







return(
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
 
        {/* <li className='nav-item'>
          <Link to="/patients" className="nav-link">
          
            </Link>
        </li> */}
      </> :  <li className='nav-item'>
          <Link to="/login" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
            Login
            </Link>
        </li>}
     
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
)}
          




// import React from 'react';
// import {Link} from "react-router-dom";
// export default (props) => {
//   console.log("props.currentUser",props.currentUser)
//   return(
//   <>
//     <nav>
//       <div class="nav-wrapper">
//         <a href="#" className="brand-logo center">DAYA App</a>
// <div>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//           {props.currentUser.user? <h3>Welcome, {props.currentUser.user.username}</h3>:""}
//           </li>
//           <li className="nav-item">
//           {props.currentUser? <Link
//               to="/patient"
//               className={window.location.pathname === "/patient" ? "nav-link active" : "nav-link"}
//             >
//               Patient
//             </Link>:""}
//           </li>
// <li className="nav-item">
//               <Link
//               to="/patients"
//               className="nav-link"
//             >
//             Logbook
//             </Link>:""}
//           </li>
//       {props.currentUser.user && props.currentUser.user.isAdmin ?
//         <>
//           <li className="nav-item">
//           <Link
//               to="/patients"
//               className="nav-link"
//             >
//              Manager
//             </Link>
//           </li>
//           <li className="nav-item">
//           <Link
//               to="/employee"
//             >
//              AddEmployee
//             </Link>
//           </li>
//           <li className="nav-item">
//           <Link
//               to="/newEntry"
//             >
//              Addpatient
//             </Link>:""}
//           </li>
//           <li className="nav-item">
//           {props.currentUser.user? <Link
//               to="/manager"
//               className={window.location.pathname === "/manager" ? "nav-link active" : "nav-link"}
//             >
//             AddManager
//             </Link>:""}
//           </li>
//           <Link
//               to="/"
//               className="nav-link">
//               Log Out
//             </Link>
//           </> : ""}
//           {props.currentUser.user ? <li className="nav-item">
//           <Link
//               to="/"
//               className="nav-link">
//               Log Out
//             </Link>
//           </li> : <>
//           <li className="nav-item">
//           <Link
//               to="/"
//               className="nav-link">
//               Login 
//             </Link>
//           </li>
//           {/* <li className="nav-item">
//             <Link
//               to="signup"
//              className="nav-link"
//             >
//           Sign Up
//             </Link>
//           </li> */}
//           </>}
//         </ul>
//       </div>
//       </div>
//     </nav>
//   </>
//   )}
          