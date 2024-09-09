
import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [counter, setCounter] = useState(1);
  const [todos, setTodos] = useState(["Do assignments."]);
  const AddTodo = () => {
    setTodos([...todos, "My New Todo."]);
  };

  //   const CalcuatedValueFromHeavyCalculations = HeavyCalculations(counter);
  const CalcuatedValueFromHeavyCalculations = useMemo(() => {
    HeavyCalculations(counter);
  }, [counter]);
  return (
    <div >
      <h1 style={{textAlign:"center"}}>Heavy calculated Counter : {CalcuatedValueFromHeavyCalculations}</h1>
      <h1 style={{textAlign:"center"}}>Counter : {counter}</h1>
      <button style={{marginLeft:"730px",marginTop:"20px",paddingLeft:"10px",paddingRight:"10px"}} onClick={() => setCounter(counter + 1)}>+</button>
      {todos.map((todo) => (
        <p style={{textAlign:"center"}}>{todo}</p>
      ))}
      <button style={{marginLeft:"710px",marginTop:"20px"}} onClick={AddTodo}>Add new todo.</button>
    </div>
  );
};

function HeavyCalculations(counter) {
  console.log("calculations started.");
  var newValue = 0;
  for (let i = 1; i < 1000000000; i++) {
    counter += i;
  }
  return counter;
}

export default UseMemo;

