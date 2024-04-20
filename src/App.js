import './App.css';
import React from 'react';
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      validEmail: false
    },  
    onSubmit: values => {
      alert("Login Successful");
    }, 
    validate: values => {      
      values.validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email); 
      
      let errors = {};
      if(!values.email) errors.email="Field required";
      if(!values.password) errors.password="Field required"; 
      if(!values.validEmail) {
        if(values.email) {
          errors.email="Username should be an email";
        }
      }
      return errors;
    }
  }); 

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input 
          id="emailField" 
          name="email" 
          type="email"
          value={formik.values.email} 
          onChange={formik.handleChange}>         
        </input>
        {formik.errors.email ? <div id="emailError" style={{color:"red"}}>{formik.errors.email}</div> : null}
        <div>Password</div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password}></input>
        {formik.errors.password ? <div id="pswError" style={{color:"red"}}>{formik.errors.password}</div> : null}
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
