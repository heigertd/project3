import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import API from "../../utils/API"
// import "./style.css"




 function AddPatient(props) {
  const [patientState, setPatientState] = useState({
    firstname: '',
    lastname:'',
    age: '',
    email:'',
    address:'',
    doctor_appointment:'',
    medicine_type:''



  })
  const history = useHistory();
  useEffect(() => {
    if (!props.currentUser) {
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
    event.preventDefault();
    API.createPatient(patientState).then(newPatient => {
      console.log(newPatient)
      setPatientState({

        firstname: '',
        lastname:'',
        age: '',
      
        email:'',
        address:'',
        doctor_appointment:'',
        medicine_type:''

       
       
      })
      history.push("/")
    })

  }
  return (
    <div className="AddPatient">
      <h1>Register patient</h1>
      <form class="col s12">

        <div class="row">
          <div class="input-field col s6">
            <input id="first_name" type="text" onChange={handleInputChange} name="firstname" value={patientState.firstname} placeholder="name" />
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
              <input id="lastname" type="text" onChange={handleInputChange} name="lastname" value={patientState.lastname} placeholder="last_name" />
              <br />
              <label for="lastname">Last Name</label>
            </div>
          </div>


          <div class="row">
            <div class="input-field col s6">
              <input id="age" type="text" onChange={handleInputChange} name="age" value={patientState.age} placeholder="age" />
              <label for="age">Age</label>
            </div>
            <div class="input-field col s6">
              <input id="phone" type="text" onChange={handleInputChange} name="phone" value={patientState.phone_no} placeholder="phone" />
              <br />
              <label for="phone">Phone_no</label>
            </div>
          </div>
          
            <div class="row">
              <div class="input-field col s6">
                <input id="age" type="text" onChange={handleInputChange} name="address" value={patientState.address} placeholder="address" />
                <label for="age">address</label>
              </div>
              <div class="input-field col s6">
                <input id="email" type="text" onChange={handleInputChange} name="email" value={patientState.email} placeholder="email" />
                <br />
                <label for="email">email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input id="isMedicine" type="text" onChange={handleInputChange} name="isMedicine" value={patientState.isMedicine} placeholder="medicine" />
                <label for="isMedicine">Medicine</label>
              </div>
              <div class="input-field col s6">
                <input id="isFoodEaten" type="text" onChange={handleInputChange} name="end_time" value={patientState.isFoodEaten} placeholder="team" />
                <br />
                <label for="isFoodEaten">End Time</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input id="email" type="text" onChange={handleInputChange} name="email" value={patientState.email} placeholder="name" />
                <label for="email">Email</label>
              </div>
              <div class="input-field col s6">
                <input id="last_name" type="text" onChange={handleInputChange} name="hireDate" value={patientState.patientReview} placeholder="Hiredate" />
                <br />
                <label for="last_name">Patient review </label>
              </div>
            </div>

            <div class="row"></div>
            <div class="input-field col s6">
              <input id="date" type="text" onChange={handleInputChange} name="date" value={patientState.date} placeholder="date" />
              <label for="date">Doctor_appointment</label>
            </div>
            <div class="input-field col s6">
              <input id="bonus" type="text" onChange={handleInputChange} name="date" value={patientState.date} placeholder="date" />
              <br />
              <label for="date">Addmitted  date</label>
            </div>
            <button onClick={handleFormSubmit}>Add Patient!</button>
      </form>

    </div>
     

  )
}

export default AddPatient;


