import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import {v4 as uuidv4} from 'uuid';
//const { v4: uuidv4 } = require('uuid');

function App() {

  const [todo,setTodo] = useState(" ")   // text
  const [todos,setTodos] = useState([])  //input text

  const handleEdit =() =>{

  }

  const handleDelete =() =>{

  }

  const handleAdd =() =>{
    setTodos([...todos,{id:uuidv4(),todo, isCompleted:false}])
    setTodo("")
    console.log(todos)

  }

  const handleChange =() =>{
    setTodo(e.target.value)

  }

  const handleCheckbox =(e) =>{
    let id=e.target.name;
    let index = todos.findIndex(item=>{
      return item.id===id;
    })  
  let newTodos = todos;
  newTodos[index].isCompleted=!newTodos[index].isCompleted;
  setTodos(newTodos)
  }
  

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-slate-400 text-black min-h-[80vh]">
        <h1 className="text-xl hover:text-slate-800 font-bold my-5 ">
          ToDo List in React
        </h1>

        <div className="addTodo my-5">
          <h2 className="text-lg font-bold hover:text-slate-800">Add a Todo</h2>
          <input type="text" className="w-1/2" onChange={handleChange} value={todo} />
          <button onClick={handleAdd} className="p-3 py-1 text-white bg-red-600 hover:text-black rounded-md mx-6 font-bold"> 
            Add Tasks
          </button>
        </div>

        <h2 className="text-lg font-bold">Your Todos</h2>
        
        <div className="todos">
          {todos.map(item=>{

          return <div key={todo} className="todo  flex w-full justify-between">
            <input onChange={handleCheckbox} type="checkbox" name={todo.id} id="" value={todo.isCompleted}/>
            <div className={item.isCompleted?"":"line-through"}>
              {item.todo}
              </div>

              <div className="buttons ">
                <button onClick={handleEdit} className="p-3 py-1 text-white bg-red-600 hover:text-black rounded-md mx-1 font-bold">
                  Edit
                </button>
                <button onClick={handleDelete} className="p-3 py-1 text-white bg-red-600 hover:text-black rounded-md mx-1 font-bold">
                  Delete
                </button>
            </div>
          </div>
          })}
        </div>
      </div>
    </>
  );
}

export default App;
