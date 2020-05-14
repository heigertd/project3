// import React from 'react'
// import { Input, TextArea, FormBtn } from "../components/Form";
// import { Link } from "react-router-dom";
// function employee() {


  // Setting our component's initial state
  const [PatientData, setPatientData] = useState([])
  const [formObject, setFormObject] = useState({})
  useEffect(() => {
    loadPatient()
      
    }, [])



  //  / / Deletes a book from the database with a given id, then reloads books from the db

  function loadPatient(){
    API.getAllPatients()
  //  update information 
  // save the iformation
  }
  function editPatient(id) {
    API.editPatient(id)
      .then(res => loadPatients())
      .catch(err => console.log(err));
  }
  function handleFormEdit(event) {
    event.preventDefault();
    if (formObject.firstname && formObject.id) {
      API.editPatientData(formObject)
        .then(res => loadPatient())
        .catch(err => console.log(err));
    }
  };
  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.title && formObject.author) {
  //     API.saveBook({
  //       title: formObject.title,
  //       author: formObject.author,
  //       synopsis: formObject.synopsis
  //     })
  //       .then(res => loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  return (


    <div className="col s6">

      <form>

        <input onChange={handleInputChange}
          Last Name={PatientData.lastname}
          placeholder={firstname} />

        <input onChange={handleInputChange}
          First Name={PatientData.firstname}
          placeholder={lastname} />

        <input onChange={handleInputChange}
          Age={PatientData.age}
          placeholder={lastname} />

        <input onChange={handleInputChange}
          Address={PatientData.address}
          placeholder={lastname} />
        <input onChange={handleInputChange}
          email={PatientData.email}
          placeholder={lastname} />
        <input onChange={handleInputChange}
          Food Eaten={PatientData.isFoodEaten}
          placeholder={lastname} />
        <input onChange={handleInputChange}
          Food Eaten="age"
          placeholder={lastname} />
        <input onChange={handleInputChange}
          Doctor Appointment="age"
          placeholder={Appoinment} />
        <textarea id="textarea1" class="materialize-textarea" onChange={handleInputChange}></textarea>
        <label for="textarea1">Textarea</label>
        <FormBtn
          disabled={!(formObject.firstname && formObject.lastname)}
          onClick={handleFormSubmit}
        >
          Submit review
              </FormBtn>


      </form>

    </div>
  )
}
// export default employee