import { useState } from 'react';
import UserContext from './context/UserContext';
import {
  // MoreInfo,
  AppBar,
  Coins,
  Portfolio,
  Stats,
  Wiki,
  ContactUs,
  Register,
  Login,
  User,
  NotRegisteredUser
} from './components';
import './App.css';
import React from 'react';

import {
  Routes, Route, Outlet, // NavLink
} from 'react-router-dom';

export const App = () => {
  const [isLogged, setIsLogged] = useState(true);

  const userData = {
    user: 'Julian',
    password: 'abc123'
  };
 /*  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  }); */

  
  return (
    <UserContext.Provider value={userData} >
      <div className="App">
        <AppBar id="Header" />
        <Routes>
          <Route path="/" element={<Coins />} exact />
          <Route path="/Coins" element={<Coins />}/>
          <Route path="/Wiki" element={<Wiki />}/>
          <Route path="/ContactUs" element={<ContactUs />}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Portfolio" element={isLogged ? <Portfolio />: <NotRegisteredUser />}/>
          <Route path="/Stats" element={isLogged ? <Stats /> : <NotRegisteredUser />}/>
          <Route path="/User" element={isLogged ? <User /> : <NotRegisteredUser />}/>
        </Routes>
        <main style={{ padding: '1rem 0' }}>
          <Outlet />
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default App;

