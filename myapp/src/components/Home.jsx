import {useContext} from 'react';
import { AuthContext } from './Context/AuthContext';

function Home()  
{const { state, dispatch } = useContext(AuthContext);
console.log(state, "state");

function Increment() {
  dispatch({ type: "INCREMENT" });
}

return (
  <div className='counterdiv'>
    Home <h1>counter : {state?.counter}</h1>
    <button className="buttoncol" onClick={Increment}>+</button>
  </div>
);
}
export default Home;