import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import API from "../../utils/API"
// import "./style.css"
 

function AddEmployee(props) {
  const [employeeState, setEmployeeState] = useState({
    name: '',
    age: '',
    phone_no: '',
    email: '',
    hireDate: '',
    salary: '',
    bonus: '',
    start_time: '',
    end_time: ''




  })
  const history = useHistory();
  useEffect(() => {
    if (!props.currentUser) {
      history.push('/login')
    }

  }, [props.currentUser])

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEmployeeState({
      ...setEmployeeState,
      [name]: value
    })
  }
  const handleFormSubmit = event => {
    event.preventDefault();
    API.createEmployee(employeeState).then(newEmployee => {
      console.log(newEmployee)
      setEmployeeState({

        name: '',
        age: '',
        phone_no: '',
        email: '',
        hireDate: '',
        salary: '',
        bonus: '',
        start_time: '',
        end_time: ''
      })
      history.push("/")
    })

  }
  return (
    <div className="AddEmployee">
      <h1>Register an employee</h1>
      <form class="col s12">

        <div class="row">
          <div class="input-field col s6">
            <input id="first_name" type="text" onChange={handleInputChange} name="firstname" value={employeeState.firstname} placeholder="name" />
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
              <input id="lastname" type="text" onChange={handleInputChange} name="lastname" value={employeeState.lastname} placeholder="last_name" />
              <br />
              <label for="lastname">Last Name</label>
            </div>
          </div>


          <div class="row">
            <div class="input-field col s6">
              <input id="age" type="text" onChange={handleInputChange} name="age" value={employeeState.age} placeholder="age" />
              <label for="age">Age</label>
            </div>
            <div class="input-field col s6">
              <input id="phone" type="text" onChange={handleInputChange} name="phone" value={employeeState.phone} placeholder="phone" />
              <br />
              <label for="phone">Phone_No</label>
            </div>
          </div>
          
            <div class="row">
              <div class="input-field col s6">
                <input id="age" type="text" onChange={handleInputChange} name="age" value={employeeState.age} placeholder="age" />
                <label for="age">Age</label>
              </div>
              <div class="input-field col s6">
                <input id="phone" type="text" onChange={handleInputChange} name="phone" value={employeeState.phone} placeholder="phone" />
                <br />
                <label for="phone">Phone_No</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input id="first_name" type="text" onChange={handleInputChange} name="start_time" value={employeeState.name} placeholder="name" />
                <label for="start_time">Start Time</label>
              </div>
              <div class="input-field col s6">
                <input id="end_time" type="text" onChange={handleInputChange} name="end_time" value={employeeState.end_time} placeholder="team" />
                <br />
                <label for="end_time">End Time</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input id="email" type="text" onChange={handleInputChange} name="email" value={employeeState.email} placeholder="name" />
                <label for="email">Email</label>
              </div>
              <div class="input-field col s6">
                <input id="last_name" type="text" onChange={handleInputChange} name="hireDate" value={employeeState.hiredate} placeholder="Hiredate" />
                <br />
                <label for="last_name">Hired  Date </label>
              </div>
            </div>

            <div class="row"></div>
            <div class="input-field col s6">
              <input id="salary" type="text" onChange={handleInputChange} name="salary" value={employeeState.salary} placeholder="name" />
              <label for="salary">Salary</label>
            </div>
            <div class="input-field col s6">
              <input id="bonus" type="text" onChange={handleInputChange} name="bonus" value={employeeState.bonus} placeholder="team" />
              <br />
              <label for="bonus">Bonus</label>
            </div>
            <button onClick={handleFormSubmit}>Add Employee!</button>
      </form>

    </div>
     

  )
}

export default AddEmployee;


