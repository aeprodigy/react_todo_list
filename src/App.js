/*
author: MIKE MAMBWE
Program: a react todo list APP
Contact: +260975854067
Email : engineermambwe@gmail.com
*/
//this program uses react hooks to store and output the information in it.
import React, { useState } from "react";

import "./App.css";
import Footer from "./Components/Footer";
const App = () => {
  //The use state hook below this line
  const [todo, setTodo] = useState([]);
  //This todo sets  track of the currect todo we are adding.
  const [trackTodo, setTrackTodo] = useState("");

  //The handleSubmit Method
  function handleSubmit(e) {
    e.preventDefault(); // this statement prevents the reload of the page when the form is submitted,

    const todoObj = {
      id: new Date().getTime(),
      text: trackTodo,
      completed: false,
    };
    setTodo([...todo].concat(todoObj)); //fixed bug.variable
    setTrackTodo("");
  }

  //The delete function to remove the todo from the list
  function deleteTodo(){

  }

  return (
    <div className="App">
      <h2>First week(1) Todo List App</h2>
      {/*The Todo List form starts here */}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTrackTodo(e.target.value)}
          value={trackTodo}
        />
        <button type="submit">Add</button>
      </form>
      {todo.map((trackTodo) => (
        <div key={trackTodo.id}>
          <div>{trackTodo.text}</div>
          <button onClick={()=> deleteTodo(trackTodo.id)}>Remove</button>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default App;
