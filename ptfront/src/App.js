import { useState } from 'react';
import './App.css';
import BasicButtonGroup from './components/menu';
import Lifecycle from './Lifecycle';
import FetchCard from './FetchCard';
import ResizeApp from './ResizeApp';
import React from 'react';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={()=> setShow(!show)} >
        Show/Hide 
      </button>
      { show && <Lifecycle /> }
      
      {/* <FetchCard /> */}
      {/* {show && <ResizeApp />} */}
    </div>
  );
}

export default App;
