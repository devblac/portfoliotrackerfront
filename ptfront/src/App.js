//import { useState } from 'react';
import UserContext from './context/UserContext';
import {
  MoreInfo,
  AppBar,
  Coins,
  Portfolio,
  Stats,
  Wiki,
  ContactUs,
  Register,
  Login
} from './components';
import './App.css';
import React from 'react';

import {
  Routes, Route, Outlet, NavLink
} from 'react-router-dom';

function App() {

  const userData = {
    user: 'Julian',
    password: 'abc123'
  };
  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <UserContext.Provider value={userData} >
      <div className="App">
        <AppBar id="Header" />
        <Routes>
          <Route path="/" element={null} exact />
          <Route path="/Coins" element={<Coins />}/>
          <Route path="/Portfolio" element={<Portfolio />}/>
          <Route path="/Stats" element={<Stats />}/>
          <Route path="/Wiki" element={<Wiki />}/>
          <Route path="/ContactUs" element={<ContactUs />}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/Login" element={<Login />}/>
        </Routes>
        <main style={{ padding: '1rem 0' }}>
          <Outlet />
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default App;

