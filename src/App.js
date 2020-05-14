import React from 'react';
// import Secound from './layout/Secound'
import {  BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
import logIn from './layout/Login';
import Navbar from './components/Navbar';
import Patient from './layout/Patient';
import API from './utils/API';
import Footer from "./components/Footer";
import LogBook from './layout/LogBook'
import Login from './layout/Login';



class App extends React.Component {
  state = { data: [], user: {} }

  componentDidMount() {
    API.getAllPatients().then(({ data }) => {
      this.setState({ data })
      console.log(data)
    })
  }
  


  render() {
    return (
      <Router>
          <Navbar />
          <Route exact path={["/","/login"]} component={Login} />
          <Route exact path="/logbook" component={LogBook} />
          <Route exact path="/patient/:id" component={LogBook} />
          {/* <Route exact path="/patient:id" component={Patient} /> */}
          <Route exact path="/patient" component={() => <Patient data={this.state.data} />} />
          {/* <Route exact path="/patient" component={Secound}/> */}
          <Footer />
      </Router>
    );
  }

}



export default App;