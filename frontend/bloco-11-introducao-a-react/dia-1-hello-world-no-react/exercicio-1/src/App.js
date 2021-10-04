import React from 'react';
import './App.css';
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const toDo = ['React', 'JSX', 'Redux', 'Others'];
  return toDo.map((code) => Task(code));
}

export default App;