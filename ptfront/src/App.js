import { useState } from 'react';
import UserContext from './context/UserContext';
import {
  MoreInfo,
  Home,
  Coins,
  Portfolio,
  Stats,
  Wiki,
  ContactUs,
  Register,
  Login,
  User,
} from './views';
import {
  AppBar,
  PersistLogin
} from './components';
import AuthMiddleware from './middleware/Auth';
import './App.css';
import React from 'react';

import {
  Routes, Route, Outlet, Navigate // NavLink
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
          <Route path="/" exact element={<PersistLogin />}/>
            <Route index exact element={<Home />}/>
            <Route path="coins" element={<Coins />}/>
            <Route path="Wiki" element={<Wiki />}/>
            <Route path="contactUs" element={<ContactUs />}/>
            <Route path="Portfolio" element={ <Portfolio />}/>
            <Route path="Stats" element={<Stats />}/>
            <Route path="/auth">
              <Route path='login' element={<Login />}></Route>
              <Route path='register' element={<Register />}></Route>
              <Route path="user" element={<AuthMiddleware />}>
                <Route index element={<User />}></Route>
              </Route>
            </Route>
          <Route path='*' element={<Navigate to='/' />}></Route>          
        </Routes>
        <main style={{ padding: '1rem 0' }}>
          <Outlet />
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default App;

