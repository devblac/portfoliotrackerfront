import React, { useState } from 'react';
import { render } from 'react-dom';

import BasicGrid from '../components/BasicGrid';
import { useEffect } from 'react';
import { axiosInstance } from '../axios';
import axios from 'axios';


const Home = () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState([]);

  useEffect( ()=> {
    //const response = axiosInstance.get('user_portfolio');
/*       const res = axios("http://127.0.0.1:8000/api/user_portfolio")
      .then((response) => {
        setResult(response.data);
        setError(null);
      })
      .catch(setError); */
  }, [])
    return (
        <React.Fragment>
            <div>
              HOME
            </div>
        </React.Fragment>
    )
}

export default Home;

