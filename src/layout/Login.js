import React, {useState} from 'react'
import  "../components/LogInBtn/style.css";
//
// import LogInBtn from '../LogInBtn';
import API from "../utils/API"

function Login(props){
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [code, setCode] = useState('');
    const [login, setLogin] = useState(false);


    const handleLogin = () =>{
        console.log(username,password)
        API.login({username,password}).then(data=> console.log(data))
    }

    const handleSignup = () =>{
        API.signup({username,password, code}).then(data=>console.log(data))
    }

    
    return(
    
 <div class="login-page container">
 <div className ="row">

    <div className='col s12'>
    <div class="register-form">
        <h2>{login ? "Log In" : "Sign Up"}</h2>
          <div>
            <input id="create-name" type="text" placeholder="enter your name" onChange = {(e)=>setUsername(e.target.value)} />
          </div>
            <input id="create-password" type="password" placeholder="enter your password" onChange = {(e)=>setPassword(e.target.value)}/><div/>
            {login ? "" : <><input type="text" placeholder="registration code" onChange = {(e)=>setCode(e.target.value)}/><div/></>}
            <button  onClick={login ? handleLogin : handleSignup} id="create-acc">{login ? "Log In" : "Submit"}</button>
            {login ? <p class="message">Not registered? <a onClick={()=>setLogin(false)} href="#">Create an account</a></p> : <p class="message">Already registered? <a onClick={()=>setLogin(true)} href="#">Sign In</a></p>}
        </div>
    </div>

 </div>


</div>
)

  
  }

export default Login;


// this code is for authentication

    // const handleSessionBtnClick = event=>{
    //     event.preventDefault();
    //     API.readSessions().then(res=>{
    //         console.log(res.data);
    //     })
    // }


  
    
        //   <div className="container" id="container">
        //     <div class="form-container sign-up-container">
        //         <form action="#">
        //             <h1>Create Account</h1>
                    
                    
        //             <input type="text" placeholder="Name" />
        //             <input type="email" placeholder="Email" />
        //             <input type="password" placeholder="Password" />
        //             <button>Sign Up</button>
        //         </form>
        //     </div>
        //     <div class="form-container sign-in-container">
        //         <form action="#">
        //             <h1>Sign In</h1>
                    
                    
        //             <input type="email" placeholder="Email" />
        //             <input type="password" placeholder="Password" />
        //             <a href="#">Forgot your password?</a>
        //             <button  id="Log-In">   Log In</button>
               
                   
               
               
        //         </form>
        //     </div>
        //     <div class="overlay-container">
        //         <div class="overlay">
                    // <div class="overlay-panel overlay-left">
                    //     <h1>Welcome Back!</h1>
                    //     <p>
                    //         To keep connected with us please login with your credentials
                    //     </p>
                    //     <button class="ghost" id="signIn">Log In</button>
                    // </div>
                    // <div class="overlay-panel overlay-right">
                    //     <h1>Welcome to Adult HomeCare!</h1>
                    //     <p>To create an account, sign up below!</p>
        //                 <button class="ghost" id="signUp">Sign Up</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // )
        