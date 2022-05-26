import { useState } from 'react';
import Result from './SuccessPage';
import Logo from "../Logo.svg"
import  {useNavigate } from 'react-router-dom'

function Home() {
  let navigate = useNavigate();
  const [entry1, setEntry1] = useState('');
  const [entry2, setEntry2] = useState('');
 const textOnchange = (event)=>{
    setEntry1(event.target.value);
  }
  const textOnchange2 = (event)=>{
         setEntry2(event.target.value);
 }
  const checkEquality = (event)=>{
           console.log("hey")
         event.preventDefault();
         if(entry1=== entry2){
         return  navigate("/success");
         }
        return  navigate("/failure");               
  }
  console.log(entry1)
  return (

    <div className="App">    
         <div className='logo'>
           <img src={Logo}/>
         </div> 
      
     <form className='formContent'>

              
        
          <input  
          value={entry1}
              onChange={textOnchange} type="text" name="name" placeholder='Your first entry' />
          <input  value={entry2}
              onChange={textOnchange2} type="text" name="name" placeholder=' Your second entry' />
         
        <button onClick={checkEquality}>check equality</button>
      </form>
    </div>
  );
}

export default Home;
