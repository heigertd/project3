import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import API from "../../utils/API"
import "./style.css"

function AddPatient(props) {
  console.log("addpationsprops.currentuser", props.currentUser)
  const [patientState, setPatientState] = useState({
    firstname: '',
    lastname: '',
    age: '',
    email: '',
    address: '',
    doctor_appointment: '',
    isMedicine: '',
    isFoodEaten: '',
    patientReview: ''
  })
  const history = useHistory();
  useEffect(() => {
    if (!props.currentUser) {
      // getcurrentUser from the local storage
      history.push('/login')
    }

  }, [props.currentUser])

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPatientState({
      ...setPatientState,
      [name]: value
    })
  }
  const handleFormSubmit = event => {
    console.log("butnclick")
    event.preventDefault();
    API.createPatient(patientState).then(newPatient => {
      console.log(newPatient)
      setPatientState({

        firstname: '',
        lastname: '',
        age: '',
        email: '',
        address: '',
        doctor_appointment: '',
        isMedicine: '',
        isFoodEaten: '',
        patientReview: ''
      })
      history.push("/patient")
    }).catch(err => console.log(err))

  }
  return (
    <div className="  addpatient">
      <h1>Register patient</h1>
      <form class="col s12">

        <div class="row">
          <div class="input-field col s6">
            <input id="first_name" type="text" onChange={handleInputChange} name="firstname" value={patientState.firstname} placeholder="name" />
            <label for="first_name"></label>
          </div>
          <div class="input-field col s6">
            <input id="lastname" type="text" onChange={handleInputChange} name="lastname" value={patientState.lastname} placeholder="last_name" />
            <br />
            <label for="lastname"></label>
          </div>
        </div>


        <div class="row">
          <div class="input-field col s6">
            <input id="age" type="text" onChange={handleInputChange} name="age" value={patientState.age} placeholder="age" />
            <label for="age"></label>
          </div>
          <div class="input-field col s6">
            <input id="phone" type="text" onChange={handleInputChange} name="phone" value={patientState.phone_no} placeholder="phone" />
            <br />
            <label for="phone"></label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s6">
            <input id="age" type="text" onChange={handleInputChange} name="address" value={patientState.address} placeholder="address" />
            <label for="age"></label>
          </div>
          <div class="input-field col s6">
            <input id="email" type="text" onChange={handleInputChange} name="email" value={patientState.email} placeholder="email" />
            <br />
            <label for="email"></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input id="isMedicine" type="text" onChange={handleInputChange} name="isMedicine" value={patientState.isMedicine} placeholder="medicine" />
            <label for="isMedicine"></label>
          </div>
          <div class="input-field col s6">
            <input id="isFoodEaten" type="text" onChange={handleInputChange} name="end_time" value={patientState.isFoodEaten} placeholder="team" />
            <br />
            <label for="isFoodEaten"></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input id="email" type="text" onChange={handleInputChange} name="email" value={patientState.email} placeholder="name" />
            <label for="email"></label>
          </div>
          <div class="input-field col s6">
            <input id="last_name" type="text" onChange={handleInputChange} name="hireDate" value={patientState.patientReview} placeholder="Hiredate" />
            <br />
            <label for="last_name"> </label>
          </div>
        </div>

        <div class="row"></div>
        <div class="input-field col s6">
          <input id="date" type="text" onChange={handleInputChange} name="date" value={patientState.date} placeholder="date" />
          <label for="date"></label>
        </div>
        <div class="input-field col s6">
          <input id="bonus" type="text" onChange={handleInputChange} name="date" value={patientState.date} placeholder="date" />
          <br />
          <label for="date"></label>
        </div>
        <button onClick={handleFormSubmit}> Submit</button>
      </form>

    </div>


  )
}

export default AddPatient;


