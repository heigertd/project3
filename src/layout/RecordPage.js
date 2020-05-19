import React,{useState,useEffect} from 'react'
import DetailPage from '../../../../Footer/Table/DetailPage'


function RecordPage() {
  const [PatientState,setPatientState]=useState([])
  return (
    <div>


     <DetailPage patient={setPatientState}/> 
    </div>
  )
}
export default RecordPage;