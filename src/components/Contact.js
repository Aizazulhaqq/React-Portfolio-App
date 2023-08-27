import React, { useState } from 'react'
import '../App.css';
import emailjs from '@emailjs/browser';
// import axios from 'axios';

const Contact = () => {

  const [inputValue, setInputValue] = useState({});

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  }

  const handleForm = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l8mka3j', 'template_ydcbp7n', e.target, 'H9PO2BQ26Oc3cr-Bn')
      .then((result) => {
        alert("Message Send Successfully");
      }, (error) => {
        alert("Failed to Send Mail !! Please Check your internet Connection");
      });

    e.target.reset();
  }

  // const sendMessage = async (inputValue) => {
  //   await axios.post('http://localhost:8000/api/v1/contactME', inputValue)

  // }

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>

        <form onSubmit={handleForm}>
          <div className="input-box">
            <input type="text" onChange={handleChange} name="fName" placeholder='Full Name' required />
            <input type="email" onChange={handleChange} name="email" placeholder='Email Address' required />
          </div>
          <div className="input-box">
            <input type="number" onChange={handleChange} name="mNum" placeholder='Mobile Number' required />
            <input type="text" onChange={handleChange} name="emailSubject" placeholder='Email Subject' required />
          </div>
          <textarea id="" cols="30" rows="10" onChange={handleChange} name="Message" placeholder='Your Message' required ></textarea>
          <input type="submit" value="Send Message" className='btn' />
        </form>
      </section>
    </>
  )
}

export default Contact
