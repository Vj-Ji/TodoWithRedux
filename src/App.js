import './App.css';
import { useState } from 'react';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [todo,setTodo]= useState();
const dispatch = useDispatch();
const Todo = useSelector(state => state.Todo)
const {todos} =Todo;


const handleSubmit=(e)=>{
  e.preventDefault();
  dispatch(AddTodoAction(todo));
}

const handleDelete=(t)=>{
  dispatch(RemoveTodoAction(t));
}

  
  return (
    <div>
      <div style={{textAlign:"center"}}>
      <h1>Todo App</h1>
      </div>
      <div style={window.innerWidth>500?{display:"flex",justifyContent:"center"}:{display:"flex"}}>

      <form onSubmit={handleSubmit} style={window.innerWidth>500?{padding:"40px"}:{}}>
    <input className="ip" type="text" style={window.innerWidth>500?{border:"2px solid red"}:{border:"2px solid black"}} placeholder="Enter..." onChange={(e)=>setTodo(e.target.value)}/>
    <br />
    <button style={{width:"100%",margin:"0px"}} className="btn" type="submit">Add</button>
      </form>
      </div>
      <ul className="todolist">
    {todos && todos?.map((t)=>(   
      <li key={t.id} className="tododetail">
        <span className="text" style={window.innerWidth>500?{}:{maxWidth:"300px"}}>{t.todo}</span>
        <button className="btn" onClick={()=>handleDelete(t)}>Delete</button>
      </li>
    ))
  }
  </ul>


    </div>
  );
}

export default App;
