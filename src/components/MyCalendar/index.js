

//   const [date,setDate]=useState(new Date());
//   const  onchange  = (date)=>{
//   setDate(date)
//   }
 
//   return(
//     <div>
//          <Calendar 
//           onChange={date.onChange}
//           value={date}
//         />

//     </div>

//   ) 
// }
// export default MyCalendar;
// import React,{useState} from 'react'
import Calendar from "react-calendar"
const MyCalendar=()=> {
import React, { Component } from "react";

class MyCalendar extends Component {
  constructor() {
    super();
    this.state = {
      showHideCalendar: true,
      
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideCalendar() {
    if(calendar){
      this.setState({ showHideCalendar: !this.state.showHideCalendar });
    }
  }
   render(){
    const { showHidecalendar } = this.state;
return (
  <div>
         <Calendar 
          onChange={date.onChange}
          value={date}
        />
 <button onClick={() => this.hideCalendar("showCalendar")}></button>
    </div>
)



}} 
   