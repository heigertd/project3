import React from 'react';

function Secound({ patientData, setActivePatient, goToLogbook }) {
  return (

    <>

      <div class="col s12 m6 l4">
        <div class="card" onClick={() => goToLogbook([patientData])}>
          <h5> <span class="card-title">{patientData.firstname} {patientData.lastname}</span></h5>
          <div class="card-image">
            <img src={patientData.url || "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVlwngYTvaINvzuU-SL1vWpsalNFtNId4ewMxxMUfgkjL5ou1m&usqp=CAU"} alt="old person avator" />
          
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