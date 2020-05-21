
import React, { useEffect, useState } from "react";
import API from '../utils/API';
import { useParams } from "react-router-dom";
import Food from './Food'
import Container from '../components/Container/Container'
import Calendar from "react-calendar"
import axios from "axios";
import { Link } from 'react-router-dom'
import { render } from "@testing-library/react";
function LogBook(props) {
  // created the use state to update the table
  const [date, setDate] = useState('')
  const [formObject, setTableObject] = useState({})
  const [patientData, setPatientData] = useState({})


  const params = useParams()
  console.log(props.data)
  // using the api a data is collected from the database by id for a single patient
  useEffect(() => {
    API.getPatientData(params.id).then(res => {
      setPatientData(res.data)
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

  return (



    <div className="container1" >
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
              <tr className="table1">
                <th className="col-1"> Item</th>
                <th className="col-2">value</th>
                <th className="col-3">  LoggedBy:{props.data ? props.data.firstname : ""} </th>


                {/* <th> LoggedBy:{props.data ? props.data.firstname : ""}</th> */}

              </tr>
            </thead>

            <tbody className="TableBody">
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
                <td><Calendar name="calendar" onChange={handleCalendarInput} /></td>

              </tr>
              <tr>
                <td>PatientReview</td><td>
                  <label>
                    <textarea name="address" value={formObject.address} onChange={handleInputChange} />
                  </label>
                </td>
              </tr>
            </tbody>
          </table    >
          <button class="btn waves-effect dangerous" onClick={handleTableChange}>Submit</button>

          <span><Link to="/patient">
            <button class="btn waves-effect dangerous">go back</button>
          </Link> </span>
        </div>

      </div>


    </div>
  );
}
export default LogBook;
