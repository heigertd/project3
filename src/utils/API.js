import axios from "axios";
// import logInbtn from "../components/LogInBtn"; 
const BASE_URL = "http://localhost:8080"
export default {
  getPatientData: (id) => axios.get(`${BASE_URL}/patient/${id}`),
  // getPatientLog: (id) => axios.get(`${BASE_URL}/log/${id}`),
  getAllPatients: function () {
    console.log("getallpatientsrunning")
    return axios.get(`${BASE_URL}/patients`)
  },
  // getAllPatients: ()=> axios.get(`${BASE_URL}/patients`),
  createEmployee: function (employeeData) {
    return axios.post(`${BASE_URL}/api/employee`, employeeData, { withCredentials: true })
  },
  createPatient: function (patientData) {
    console.log("createPatient")
    return axios.post(`http://localhost:8080/api/createPatient`, patientData, { withCredentials: true })
  },
  createManager: function (managerData) {
    return axios.post(`${BASE_URL}/api/manager`, managerData, { withCredentials: true })
  },

  // login btn
  getLogInbtn: (id) =>
    axios.post(`${BASE_URL}/` + id),
  // creating a route that appdates the patients ifo
  updatePatientById: (data,id) => {
    return axios.put(`${BASE_URL}/api/patient/${id}`, data)
  },
  login: (data) => axios.post(`${BASE_URL}/login`, data),
  signup: (data) => axios.post(`${BASE_URL}/api/signup`, data),
  save: (data) => axios.put(`${BASE_URL}/api/save`),
  logout: function () {
    return axios.get(`${BASE_URL}/logout`, { withCredentials: true })
  },
  saveChange: function (Data) {
    return axios.put(`${BASE_URL}/api/patient`, Data)
  },
  Logout: () => axios.destroy(`${BASE_URL}/api/logout`),
  getCurrentUser: () => axios.get('/api/currentuser')
}
