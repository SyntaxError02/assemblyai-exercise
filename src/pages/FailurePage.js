// import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Logo from "../Logo.svg"

function Failure() {
  const navigate = useNavigate();
  console.log("hey whtasaup")
  return (
    <div className="App">
      <div  className='logo'>
      <img src={Logo}/>
      </div>
    <div className='formContent'>
      <div className="message">
      💤 Not equal
      </div>
     
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
    
    </div>
  );
}

export default Failure;
