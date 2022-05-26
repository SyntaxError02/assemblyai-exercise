// import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Logo from "../Logo.svg"

function Success() {
  const navigate = useNavigate();
  console.log("hey whtasaup")
  return (
    <div className="App">
      <div  className='logo'>
      <img src={Logo}/>
      </div>
    <div className='formContent'>
      <div className="message">
      🎉 Equal!
      </div>
     
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
    
    </div>
  );
}

export default Success;
