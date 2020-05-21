import React, { useState } from 'react';
import Secound from './Secound';
import Log from './LogBook'
import { useHistory } from "react-router-dom"

export default ({ data, user, patientData }) => {

  const [activePatient, setActivePatient] = useState([]);
  const userChecking = () => {
    if (user === 'Incorrect password!') {
      return <h1>  Incorrect password</h1>
    } else if (user === '') {
      return <h1>please signup</h1>
    } else {
      return (
        <>
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
  let history = useHistory();
  function goToLogbook(patient) {
    setActivePatient(patient);
    history.push(`/patient/${patient[0].id}`);
  }
  return (
    < >
      {userChecking()}
    </>)
}

