import React from 'react';

function Secound({ patientData, setActivePatient, goToLogbook }) {
  return (

    <>

      <div class="col s12 m6 l4">
        <div class="card" onClick={() => goToLogbook([patientData])}>
          <h5> <span class="card-title">{patientData.firstname} {patientData.lastname}</span></h5>
          <div class="card-image">
            <img src={patientData.url || "https://previews.123rf.com/images/dtiberio/dtiberio1801/dtiberio180100202/93064324-stressed-old-person.jpg"} alt="ty" />
          
          </div>

          <div className="card-content">
            <p>email - {patientData.email}</p>
            <p>phone - {patientData.phone_number}</p>
          </div>
        </div>
      </div>
    </>

  );
}
export default Secound;