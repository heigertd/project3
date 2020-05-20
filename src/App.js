import React from 'react';
// import Secound from './layout/Secound'
import { BrowserRouter as Router, Route } from "react-router-dom";
 
 

// import './App.css';

import Navbar from './components/Navbar';
import Patient from './layout/Patient';
import API from './utils/API';
import Footer from "./components/Footer";
import LogBook from './layout/LogBook'
import Login from './layout/Login';
import Employee from './layout/employee';
import Manager from './layout/Manager';
import AddManager from './layout/AddManager';
import AddPatient from './layout/AddPatients';
import AddEmployee from './layout/AddEmployee';




class App extends React.Component {
  state = { data:{} ,user: {} }

  componentDidUpdate = () => console.log('this is current user -', this.state.user)

  isLogedin = (userData) => {
    console.log(userData)
    this.setState({
      user: userData,
      
    })
    localStorage.setItem('currentUser', JSON.stringify(userData))
  }

  componentDidMount() {
    console.log("componentDidMount")
   const currentUser= JSON.parse(localStorage.getItem('currentUser') )
    this.setState({user:currentUser.user})


  //  const currentUser= localStorage.getItem('currentUser') ? this.setState(JSON.parse(localStorage.getItem('currentUser'))) :
   
   API.getAllPatients()
      .then(res=>{
       this.setState({data:res.data})
      }).catch(err=>console.log(err))




    // API.getAllPatients().then(({ data }) => {
    //   this.setState({data })
    //   console.log(data)
    // }).catch(err =>console.log(err))
  }




  render() {
    return (
   
  <Router> 
   
        <Navbar currentUser={this.state.user} />
       
        <Route exact path={[ "/","/login"]} component={() => <Login isLogedin={this.isLogedin} />} />
        <Route exact path="/logbook/:id" component={() => <LogBook data={this.state.user} />} />
        <Route exact path="/patient/:id" component={Manager} />
        <Route exact path="/patient" component={Patient} />
        <Route exact path="/manager" component={AddManager}/>
        <Route exact path="/employee" component={AddEmployee}/>
        <Route exact path="/newEntry" component={() => <AddPatient currentUser={this.state.user}  />} />
        <Route exact path="/patient/:id" component={LogBook} />
        <Route exact path="/LogBook/:id" component={Employee} />
        {/* <Route exact path="/patient:id" component={Patient} /> */}
        <Route exact path="/patient" component={() => <Patient data={this.state.data} user={this.state.user} />} />
        {/* <Route exact path="/patient" component={Secound}/> */}
       
        <Footer />
</Router> 
    
    );
  }
}

export default App;