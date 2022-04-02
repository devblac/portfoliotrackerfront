import { useState } from 'react';
import './App.css';
import BasicButtonGroup from './components/menu';
import Lifecycle from './Lifecycle';
import FetchCard from './FetchCard';
import ResizeApp from './ResizeApp';
import React from 'react';
import { CounterApp } from './CounterApp';
/* import TodoApp from './TodoApp'; */
import MouseApp from './MouseApp';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {/* <button onClick={()=> setShow(!show)} >
        Show/Hide 
      </button>
      { show && <Lifecycle /> } */}
      
      {/* <FetchCard /> */}
      {/* {show && <ResizeApp />} */}

      {/* <CounterApp /> */}
      {/* <TodoApp /> */}
      <MouseApp />
    </div>
  );
}

export default App;
