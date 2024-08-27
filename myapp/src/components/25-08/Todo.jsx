import React, { useState } from "react";
import "../25-08/todo.css";
const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [singleTodo, setSingleTodo] = useState("");
    function submitTodo() {
        setTodos([...todos, singleTodo]);
        setSingleTodo("");
    }
    function handleInput(event) {
        setSingleTodo(event.target.value)
    }
    console.log(singleTodo, "singleTodo");
    console.log(todos, "todos");
    return (
        
         
        <div className="parent">
            <h1 className="h1color"> Your Todo</h1>
            <input className="input"
                value={singleTodo}
                onChange={handleInput}
                placeholder="Type your todo here" />
            <button className="buttonc" onClick={submitTodo}>Submit Todo</button>
            {todos.map((todo) => (
                <h3>{todo}</h3>
            ))}

        </div>
        
    )
}
export default Todo;