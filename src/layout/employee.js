
// import React, { useEffect, useState } from "react";
// import API from '../utils/API';
// import {  useParams } from "react-router-dom";
// // import Patient from './Patient';
// // import Container from '../components/Container/Container'
// import Calendar from "react-calendar"
// // import { FormBtn } from '../components/Form'
// import axios from "axios";


// function Log() {
//   // created the use state to update the table
//   const [patientData, setPatientData] = useState({});
//   const [            ]
  
//   // const [date, setDate] = useState('')
//   const [formObject, setTableObject] = useState({
//     firstname: ''

//   })
//   // const [patient, setUpdatePatient] = useState({})

//   const params = useParams()

//   // using the api a data is collected from the database by id for a single patient
//   useEffect(() => {
//     API.getPatientLog(params.id).then(res => {
//       console.log(res.data)
//       setPatientData(res.data)

//     })
//     }, [params.id])


//     function ubdatePatient() {
//       API.updatePatientById(formObject).then(res => {
//         console.log(res.data)
//         setPatientData(res.data)
//       })
//         .catch(err => console.log(err));
//     }



//     // Handles updating component state when the user types into the input field
//     function handleInputChange(event) {
//       console.log(event)
//       const { name, value } = event.target;
//       setTableObject({ ...formObject, [name]: value })
//       console.log(formObject)
//     };


//     // function for the calendar

//     function handleCalendarInput(date) {
//       console.log(date);
//       setTableObject({ ...formObject, date })
//     }

//     // When the form is submitted, use the API.saveBook method to save the book data
//     // Then reload books from the database
//     function handleTableChange(event) {
//       console.log("hello", patientData.id)
//       event.preventDefault();
//       if (formObject.firstname) {
//         axios.put(`http://localhost:8080/api/patient/${patientData.id}`, formObject)
//           // API.updatePatientById(
//           //   formObject,patientData.id
//           // )
//           .then(res => ubdatePatient())
//           .catch(err => console.log(err));
//       }
//     };




//     return (



//       <div className="container" >
//         <div className="row">
//           <div className= "employe"col s6>
//             {/* <table class="striped"> */}
//             <table striped bordered hover variant="dark">
//               <thead>
//                 <tr>
//                   <th> Item</th>
//                   <th>value</th>
//                   <th> update</th>



//                 </tr>


//               </thead>

//               <tbody>
//                 <tr>
//                   <td>First Name</td>
//                   <td>{patientData.is}</td>
//                   <td><input name="firstname" value={formObject.firstname} onChange={handleInputChange}></input></td>


//                 </tr>
//                 <tr>
//                   <td>Last Name</td>
//                   <td>{patientData.lastname}</td>
//                   <td><input name="lastname" value={formObject.lastname} onChange={handleInputChange} ></input></td>

//                 </tr>
//                 <tr>
//                   <td>Age</td>
//                   <td>{patientData.age}</td>
//                   <td><input name="age" value={formObject.age} onChange={handleInputChange}     ></input></td>

//                 </tr>
//                 <tr>
//                   <td>Address</td>
//                   <td>{patientData.address}</td>
//                   <td><input name="address" value={formObject.address} onChange={handleInputChange}      ></input></td>

//                 </tr>
//                 <tr>
//                   <td>Phone</td>
//                   <td>{patientData.phone_number}</td>
//                   <td><input name="phnoe_number " value={formObject.phone_number} onChange={handleInputChange}     ></input></td>

//                 </tr>
//                 <tr>
//                   <td>Food</td>
//                   <td>{patientData.isFoodEaten}</td>
//                   <td>
//                     <label><input class="with-gap" name="group3" type="radio" checked /><span>True</span></label>
//                   </td>
//                   <td>
//                     <label><input class="with-gap" name="group3" type="radio" checked /><span>False</span></label>
//                   </td>

//                 </tr>
//                 <tr>
//                   <td>patientReview</td>
//                   <td>{patientData.patientReview}</td>
//                   <td><input name="patientReview " value={formObject.patientReview} onChange={handleInputChange}  ></input></td>

//                 </tr>
//                 <tr>
//                   <td>Doctors Appointment</td>
//                   <td>{patientData.date}</td>
//                   <td><Calendar name="calendar" onChange={handleCalendarInput} /></td>
//                 </tr>



//               </tbody>


//               {/* <button class="btn waves-effect waves-light" type="submit" name="action"    >Submit    
//     <i class="material-icons right">send</i>
//   </button> */}
//               {/* <FormBtn
//                 handleTableChange={handleTableChange}>

//                   UbdateProfile
//               </FormBtn> */}
//             </table    >
//             <button onClick={handleTableChange}>Go Back</button>

//             {/* <Link to="/patient">
//               <button>go back</button>
//             </Link> */}


//           </div>
          
//         </div>


//       </div>
//     );
//   }
// export default Employee;
