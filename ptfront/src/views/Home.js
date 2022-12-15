import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
//import Highcharts from 'highcharts/highstock';

import BasicGrid from '../components/BasicGrid';

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
    return (
        <React.Fragment>
            Home
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

