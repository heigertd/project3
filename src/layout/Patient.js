import React, { useState } from 'react';
import Secound from './Secound';
import Log from './LogBook'
import { useHistory } from "react-router-dom"

export default ({ data, user, patientData }) => {
  console.log(data)
  // const [activePatient, setActivePatient] = useState(null)
  const [activePatient, setActivePatient] = useState([]);
  // const [patientData ,setPatientData]=useState([])
  console.log(user);
  console.log(patientData)

  const userChecking = () => {
    if (user === 'Incorrect password!') {
      return <h1>  Incorrect password</h1>
    } else if (user === '') {
      return <h1>please signup</h1>
    } else {
      return (
        <>
          <div >

            <h1>HELLO WORLD</h1>
          </div>
          <div className='row'>
            {activePatient.length ? (
              <Log patient={activePatient} setActivePatient={setActivePatient} />
            ) : (
                <div>
                  {data && data.length ? (
                    data.map(patientData => (
                      <Secound
                        patientData={patientData}
                        goToLogbook={goToLogbook}
                      />
                    ))
                  ) : (<div />)}
                </div>
              )}
          </div>
        </>)
    }



  }

  console.log("hi", user)
  let history = useHistory();
  function goToLogbook(patient) {
    setActivePatient(patient);
    history.push(`/patient/${patient[0].id}`);
  }
  return (
    < >{
      userChecking()}
      {/* <div >
      <h1>HELLO WORLD</h1>
    </div>
    <div className='row'>
      {activePatient.length ? (
        <Log patient={activePatient} setActivePatient={setActivePatient} />
      ) : (
          data.map(patientData => (
            <Secound
              patientData={patientData}
              goToLogbook={goToLogbook}
            />
          ))
        )}
    </div> */}
    </>)
}

