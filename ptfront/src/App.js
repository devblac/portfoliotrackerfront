import { useState } from 'react';
import UserContext from './context/UserContext';
import MoreInfo from './components/MoreInfo';
import './App.css';
import Menu from './components/menu';
import React from 'react';

function App() {

  const userData = {
    user: 'Julian',
    password: 'abc123'
  };

  return (
    <UserContext.Provider value={userData} >
      <div className="App">
        <div id="Header">
          <div id="Title"><h1>title</h1></div>
          <div id="Profile"><h1>profile</h1></div>
        </div>
        <div id="Menu"><Menu /></div>
        <div id="Content">
          <h1>content</h1>
          <h1>useContext</h1>
          <MoreInfo />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;

