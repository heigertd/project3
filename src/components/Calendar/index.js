import React,{useState} from 'react'
import Calendar from "react-calendar"
const Calendar=()=> {

  const [date,setDate]=useState(new Date());
  const  onchange  = (date)=>{
  setDate(date)
  }
 
  return(
    <div>
         <Calenar 
          onChange={date.onChange}
          value={date}
        />

    </div>

  ) 
}
export default Calendar