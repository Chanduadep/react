
import { createContext, useEffect, useReducer } from "react";
import api from "..";

export const AuthContext = createContext();

const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
      case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

const InitialState = { user: null, counter: 101 ,loading: true};

// Higher order component -> its accept another component as parameter.

function ParentAuthComponent({ children }) {
  const [state, dispatch] = useReducer(Reducer, InitialState);
  useEffect(()=>{
    async function getCurrentUSer(){
     try{
      const response=await api.post('/auth/get-currentuser')
      if(response.data.success){
        dispatch( {type:"LOGIN",payload:response.data.userData})
      }
     }catch(error){
      console.log(error)
     }
    }
    getCurrentUSer();
  },[])

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default ParentAuthComponent;
