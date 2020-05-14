import React,{useState,useEffect} from 'react'
import DetailPage from '../DetailPage/DetailPage'


function RecordPage() {
  const [PatientState,setPatientState]=useState([])
  return (
    <div>


     <DetailPage patient={setPatientState}/> 
    </div>
  )
}
export default RecordPage;