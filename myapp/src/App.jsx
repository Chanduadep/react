
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Navbar from './components/21-08/Navbar';
import Counter from './components/21-08/Counter';
import UseEffect1 from './components/23-08/useEffect1';
import UseEffect2 from './components/23-08/useEffect2';
import UseEffect3 from './components/23-08/useEffect3';
import UseEffect4 from './components/23-08/useEffect4';
import UseParams from './components/24-08/UseParams';
import Propdrilling from './components/24-08/Propdrilling';
import  {useState} from "react";
import Mapping from "./components/24-08/Mapping";
import Todo from './components/25-08/Todo';
import Mapping2 from "./components/24-08/Mapping2";
import Dynamicstyling from "./components/29-08/Dynamicstyling";
import RegisterValidation from './components/31-08/RegisterValidation';
import RegisterValidation2 from './components/31-08/RegisterValidation2';
import UseReducer from './components/1-09/UseReducer';






function App() {
  const [fname,setfname]=useState(["sneha","pooja","anaida"]);
 
  const [counter,setCounter]=useState(1);
  function Inc(){
    setCounter(counter+1);
  }
  return(
  <> 
  <Navbar />
  <Routes>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/register-validation" element={<RegisterValidation/>}/>
    <Route path="/register-validation2" element={<RegisterValidation2/>}/>
    <Route path='/counter' element={<Counter/>}/>
    <Route path='/useeffect1' element={<UseEffect1/>}/>
    <Route path='/useeffect2' element={<UseEffect2/>}/>
    <Route path='/useeffect3' element={<UseEffect3/>}/>
    <Route path='/useeffect4' element={<UseEffect4/>}/>
    <Route path='/products/:id' element={<UseParams/>}/>
    <Route path='/props'
     element={<Propdrilling fname={["sneha","pooja","anaida"]}
     counter={counter}
     Inc={Inc}
     />}/>
     <Route path='/mapping' element={<Mapping fname={fname}/>}/>
     <Route path='/mapping2' element={<Mapping2/>}/>
     <Route path='/todo' element={<Todo/>}/>
     <Route path='/dynamicstyling' element={<Dynamicstyling/>}/>
     <Route path='/usereducer' element={<UseReducer/>}/>
     
  </Routes>

  </>
  );
}

export default App;
