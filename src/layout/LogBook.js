
import React, { useEffect, useState } from "react";
import API from '../utils/API';
import { useParams } from "react-router-dom";
// import Patient from './Patient';
import Food from './Food'
import Container from '../components/Container/Container'
import Calendar from "react-calendar"
// import { FormBtn } from '../components/Form'
import axios from "axios";
import { Link } from 'react-router-dom'
import { render } from "@testing-library/react";
import moment from "moment";
function LogBook(props) {
  // created the use state to update the table

  const [date, setDate] = useState('')
  const [formObject, setTableObject] = useState({})
  const [patientData, setPatientData] = useState({})
  const [getPatientLog, setPatientLog] = useState({})
  const params = useParams()
  console.log(props.data)
  // using the api a data is collected from the database by id for a single patient
  useEffect(() => {
    API.getPatientData(params.id).then(res => {
      console.log(res.data)
      setPatientData(res.data)
    })
    API.getPatientLog(params.id).then(res=>{
      console.log(res.data)
      setPatientLog(res.data)
    })
  }, [])

  function ubdatePatient() {
    API.updatePatientById(formObject,params.id).then(res => {
      console.log(res.data)
      setPatientData(res.data)
    })
      .catch(err => console.log(err));
  }



  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setTableObject({ ...formObject, [name]: value })
  };
  //  adding prompts

  // function handlepropmts1(){
  //   {patientData.isFoodEaten? propmt("patintData.firstname ate took meal"): prompt("patintData.firstname did not take food")

  //   }
  // }

  // function handlepropmts1(){
  //   {patientData.isMedicineTaken? propmt("patintData.firstname  took Medicine"): prompt("patintData.firstname did not take Medicine")

  //   }
  // }



  // function for the calendar

  function handleCalendarInput(date) {
    setTableObject({ ...formObject, date })
  }


  function handleTableChange(event) {
    event.preventDefault();
    API.updatePatientById(
      formObject, patientData.id
    )
      .then(res => ubdatePatient())
      .catch(err => console.log(err));

  };

  function handleCheckbox() {
    setTableObject({
      ...formObject,
      isFoodEaten: !formObject.isFoodEaten

    })

  }

// The logbook goes here
function ubdatePatient() {
  API.updatePatientById(formObject,params.id).then(res => {
    console.log(res.data)
    setPatientData(res.data)
  })
    .catch(err => console.log(err));
}

function handleLogChange(event) {
  event.preventDefault();
  API.updatePatientLog(
    formObject, getPatientLog.id
  )
    .then(res => ubdatePatient())
    .catch(err => console.log(err));

};




  return (
    <div className="container" >
      <div className="row">
        <div className="col s4">
          {patientData.isMedicine ? "" :<h3>Patient has to take medicine!</h3>}
          {patientData.isFoodEaten ? "" : <h3>Patient has to eat food!</h3>}
          {patientData.doctorAppointment ? "" : <h3>Patient has to see the doctor!</h3>}
        </div>
        <div className="col s8">
          {/* <table class="striped"> */}
          <table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th> Item</th>
                <th>value</th>
                <th> update</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>First Name</td>
                <td>{patientData.firstname}</td>
                <td><input name="firstname" value={formObject.firstname} onChange={handleInputChange}></input></td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{patientData.lastname}</td>
                <td><input name="lastname" value={formObject.lastname} onChange={handleInputChange} ></input></td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{patientData.age}</td>
                <td><input name="age" value={formObject.age} onChange={handleInputChange}     ></input></td>

              </tr>
              <tr>
                <td>Address</td>
                <td>{patientData.address}</td>
                <td><input name="address" value={formObject.address} onChange={handleInputChange}      ></input></td>

              </tr>
              <tr>
                <td>Phone</td>
                <td>{patientData.phone_no}</td>
                <td><input name="phnoe_number " value={formObject.phone_number} onChange={handleInputChange}     ></input></td>

              </tr>
              <tr>

                <td>
                  <td>Did the patient eat Food</td>
                  <td>{patientData.isFoodEaten}</td>


                  <td> <Food name="isFoodEaten" isChecked={formObject.isFoodEaten} handleCheckbox={handleCheckbox}></Food></td>


                </td>

              </tr>

              <tr>
                <td>Doctors Appointment</td>
                <td>{patientData.date}</td>
                <td><Calendar name="calendar" onChange={handleCalendarInput} /></td>
              </tr>



            </tbody>


          </table    >
          <button class="btn waves-effect dangerous" onClick={handleTableChange}>Submit</button>

          <span><Link to="/patient">
            <button class="btn waves-effect dangerous">go back</button>
          </Link> </span>


        </div>
        <Container className="col s6" fluid>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>5/11/2020</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Item1</td>
                <td>filler</td>
                <td>filler</td>
              </tr>
              <td>Date</td>
                <td>{getdate()}</td>
              <tr>
                <td>Picture</td>
                <td>some link</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{getPatientLog.name}</td>
              </tr>
              <td>Status of the patient</td>
                <td>{getPatientLog.status}</td>
            </tbody>
                    <td>LoggedBy</td>
                <td>{getPatientLog.loggedBy}</td>
          </table>
        </Container>
      </div>


    </div>
  );
}
export default LogBook;
