import React, { useState } from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
//import Highcharts from 'highcharts/highstock';

import BasicGrid from '../components/BasicGrid';
import { useEffect } from 'react';
import { axiosInstance } from '../axios';
import axios from 'axios';


const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'My chart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6]
      }
    ]
  };

  const options2 = {
    title: {
      text: 'My stock chart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
      }
    ]
  };
  
const Home = () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState([]);

  useEffect( ()=> {
    const response = axiosInstance.get('user_portfolio');
/*       const res = axios("http://127.0.0.1:8000/api/user_portfolio")
      .then((response) => {
        setResult(response.data);
        setError(null);
      })
      .catch(setError); */
  }, [])
    return (
        <React.Fragment>
            Home
            <div>

            </div>
            <div>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={options2}
                />
            </div>
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'chart'}
                    options={options2}
                />
            </div>
        </React.Fragment>
    )
}

export default Home;

