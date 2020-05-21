import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import API from "../../utils/API"
// import "./style.css"


function AddManager(props) {
  const [managerState, setManagerState] = useState({
    firstname: '',
    lastname:'',
    age: '',
    email:''

  })
  const history = useHistory();
  useEffect(() => {
    if (!props.currentUser) {
      history.push('/')
    }

  }, [props.currentUser])

  const handleInputChange = event => {
    const { name, value } = event.target;
    setManagerState({
      ...setManagerState,
      [name]: value
    })
  }
  const handleFormSubmit = event => {
    event.preventDefault();
    API.createManager(managerState).then(newManager => {
      console.log(newManager)
      setManagerState({

        firstname: '',
        lastname:'',
        age: '',
        email:''
      })
      history.push("/api/manager")
    })

  }
  return (
    <div className="AddManger">
      <h1>RegisterManger</h1>
      <form class="col s12">

        <div class="row">
          <div class="input-field col s6">
            <input id="first_name" type="text" onChange={handleInputChange} name="firstname" value={managerState.firstname} placeholder="name" />
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
              <input id="lastname" type="text" onChange={handleInputChange} name="lastname" value={managerState.lastname} placeholder="last_name" />
              <br />
              <label for="lastname">Last Name</label>
            </div>
          </div>


          <div class="row">
            <div class="input-field col s6">
              <input id="age" type="text" onChange={handleInputChange} name="age" value={managerState.age} placeholder="age" />
              <label for="age">Age</label>
            </div>
            <div class="input-field col s6">
              <input id="phone" type="text" onChange={handleInputChange} name="phone" value={managerState.phone} placeholder="phone" />
              <br />
              <label for="phone">Phone_No</label>
            </div>
          </div>
          
            <div class="row">
              <div class="input-field col s6">
                <input id="age" type="text" onChange={handleInputChange} name="email" value={managerState.age} placeholder="age" />
                <label for="age">Email</label>
              </div>
              
            </div>
            <button onClick={handleFormSubmit}>Add Manager!</button>
      </form>

    </div>
     

  )
}

export default AddManager



