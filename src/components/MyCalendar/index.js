import React,{useState} from 'react'
import Calendar from "react-calendar"
const MyCalendar=()=> {

  const [date,setDate]=useState(new Date());
  const  onchange  = (date)=>{
  setDate(date)
  }
 
  return(
    <div>
         <Calendar 
          onChange={date.onChange}
          value={date}
        />

    </div>

  ) 
}
export default MyCalendar;