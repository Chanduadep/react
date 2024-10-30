import {useContext} from 'react';
import { AuthContext } from './Context/AuthContext';

function Home()  
{
  const { state, dispatch } = useContext(AuthContext);
console.log(state, "state");

function Increment() {
  // localStorage.setItem("Myfulldata",
  //   JSON.stringify({name:"chandana",age:19}))
  // const dataForms=JSON.parse(localStorage.getItem("Myfulldata"))
  // console.log(dataForms?.name)
  // localStorage.removeItem("Myfulldata")
  dispatch({ type: "INCREMENT" });
}

return (
  <div className='counterdiv'>
    Home <h1>counter : {state?.user?.name}</h1>
    <button className="buttoncol" onClick={Increment}>+</button>
  </div>
);
}
export default Home;