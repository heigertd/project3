import React, { useState } from 'react';
import Secound from './Secound';
import Log from './LogBook'
import { Link, useHistory } from "react-router-dom"

export default ({ data }) => {
  // const [activePatient, setActivePatient] = useState(null)
  const [activePatient, setActivePatient] = useState([]);
  let history = useHistory();
  function goToLogbook(patient) {
    setActivePatient(patient);
    history.push(`/patient/${patient[0].id}`);
  }
  return <>
    <div >
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
    </div>
  </>
}

