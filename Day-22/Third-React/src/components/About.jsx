import React from 'react'
import { useNavigate } from 'react-router'

function About() {
  let navigate =useNavigate();
  function handleNavigate() {
    navigate("/dash");
  }
   
  return (
    <div>
      About
      <button onClick={handleNavigate}>Click here to go to Dashboard</button>
      </div>
  )
}

export default About