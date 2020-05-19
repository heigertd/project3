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
import Employee from './layout/Employee';
import Manager from './layout/Manager';

class App extends React.Component {
  state = { data: [], user: {} }


isLogedin=(userData)=>{
  console.log(userData)
  this.setState({
    user:userData
  })
}



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
        <Route exact path={["/", "/login"]} component={() => <Login isLogedin={this.isLogedin}/>} />
        <Route exact path="/logbook/:id" component={() => <LogBook data={this.state.user} />} />
        <Route exact path="/patient/:id" component={Manager} />
        <Route exact path="/patient/:id" component={LogBook} />
        <Route exact path="/logbook/:id" component={Employee} />
        {/* <Route exact path="/patient:id" component={Patient} /> */}
        <Route exact path="/patient" component={() => <Patient data={this.state.data}user={this.state.user}/>} />
        {/* <Route exact path="/patient" component={Secound}/> */}
        <Footer />
      </Router>

      // ===========
      // <BrowserRouter history={history}>
      //   <Switch>
      //     <Navbar />
      //     <Route exact path={["/", "/login"]} component={Login} />
      //     <Route exact path="/logbook/:id" component={LogBook} />
      //     <Route exact path="/patient/:id" component={Manager} />
      //     <Route exact path="/patient/:id" component={LogBook} />
      //     <Route exact path="/logbook/:id" component={Employee} />
      //     {/* <Route exact path="/patient:id" component={Patient} /> */}
      //     <Route exact path="/patient" component={() => <Patient data={this.state.data} />} />
      //     {/* <Route exact path="/patient" component={Secound}/> */}
      //     <Footer />

      //   </Switch>
      // </BrowserRouter>


    );
  }

}



export default App;




