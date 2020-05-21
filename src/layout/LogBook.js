
import React, { useEffect, useState } from "react";
import API from '../utils/API';
import { useParams } from "react-router-dom";
import Food from './Food'
import Container from '../components/Container/Container'
import Calendar from "react-calendar"
import axios from "axios";
// import MyCalendar from '../components/MyCalendar/MyCalendar'
import { Link } from 'react-router-dom'
import { render } from "@testing-library/react";
// import MyComponent from '../components/MyComponent/MyComponent';
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
      setPatientData(res.data)
    })
    API.getPatientLog(params.id).then(res => {
      setPatientLog(res.data)
    })
  }, [])

  function ubdatePatient() {
    API.updatePatientById(formObject, params.id).then(res => {
      setPatientData(res.data)
    })
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setTableObject({ ...formObject, [name]: value })
  };
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
      isFoodEaten: !formObject.isFoodEaten,
      isMedicineTaken: !formObject.isMedicineTaken

    })
  }
  function handleCheckboxf() {
    setTableObject({
      ...formObject,
  isMedicine: !formObject.isMedicine
    })
  }
  // The logbook goes here
  // function ubdatePatient() {
  //   API.updatePatientById(formObject, params.id).then(res => {
  //     console.log(res.data)
  //     setPatientData(res.data)
  //   })
  //     .catch(err => console.log(err));
  // }

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

          {patientData.isMedicine ? "" : <h3>Patient has to take medicine!</h3>}
          {patientData.isFoodEaten ? "" : <h3>Patient has to eat food!</h3>}
          {patientData.doctorAppointment ? "" : <h3>Patient has to see the doctor {patientData.date}!</h3>}
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
                <td><input name="phnoe_number " value={formObject.phone_no} onChange={handleInputChange}     ></input></td>

              </tr>
              <tr>
                <td>Did the patient take Medicine</td>
                <td>{patientData.isMedicineTaken}</td>
                <td><Food name="medicine " isChecked={formObject.isMedicine} handleCheckbox={handleCheckboxf}    ></Food></td>

              </tr>
              <tr>

                <td>
                  <td>Did the patient eat Food</td>
                  <td>{patientData.isFoodEaten}</td>
                  <td> <Food name="isFoodEaten" isChecked={formObject.isFoodEaten} handleCheckbox={handleCheckbox}></Food></td>


                </td>

              </tr>

              <tr >
                <td>Doctors Appointment</td>
                <td>{patientData.date}</td>
                <td><Calendar /></td>
                {/* <td><Calendar name="calendar" onChange={handleCalendarInput} /></td> */}

              </tr>
              <td>
                <label>
                  <textarea name="address" value={formObject.address} onChange={handleInputChange} />
                </label>
              </td>
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
                <th>
                  <td><Calendar name="calendar" onChange={handleCalendarInput} /></td></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Item1</td>
                <td>filler</td>
                <td>filler</td>
              </tr>
              <td>Date</td>
              <td> <td><Calendar name="calendar" onChange={handleCalendarInput} /></td></td>
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
