import axios from "axios";
import logInbtn from "../components/LogInBtn"; 
const BASE_URL = "http://localhost:8080"


export default {
getAllPatients: ()=> axios.get(`${BASE_URL}/patients`),
getPatientLog: (id)=> axios.get(`${BASE_URL}/patient/${id}`),

 // login btn
 getLogInbtn: (id) =>
   axios.post(`${BASE_URL}/` + id),

// creating a route that appdates the patients ifo
editPatient:(data,id)=>axios.get(`${BASE_URL}/patient/${id}`, data),
login: (data)=> axios.post(`${BASE_URL}/api/login`, data),
signup: (data)=> axios.post(`${BASE_URL}/api/signup`, data),

  }
