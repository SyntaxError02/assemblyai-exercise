import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Success from "./pages/SuccessPage";
import Failure from "./pages/FailurePage";

function App() {
 
  return (
    <Router>
     {/* <Home/> */}
       <Routes>
       <Route path="/" element={<Home />}/>
    <Route path='/success'  element={<Success />} />
    <Route path='/failure'  element={<Failure />} />
   

</Routes>
    </Router>
   
   
  );
}

export default App;
