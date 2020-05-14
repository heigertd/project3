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
updatePatientById:(data,id)=>axios.put(`${BASE_URL}/patient/${id}`, data),
login: (data)=> axios.post(`${BASE_URL}/api/login`, data),
signup: (data)=> axios.post(`${BASE_URL}/api/signup`, data),
save:(data)=>axios.put(`${BASE_URL}/api/save`),
saveChange:function(Data){
  return axios.put(`${BASE_URL}/api/patient`,Data)
}

  }
