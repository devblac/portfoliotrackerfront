import React, { useState, useEffect, Fragment } from 'react';
const axios = require('axios').default;

const Portfolio = () => {
    const [coins, setCoins] = useState([])

    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/ping')
        .then(res => {
          console.error('res', res)
          setCoins(res.data)
        })
        .catch( err => {
          console.log(err)
        })
      }, [])

    return (
        <div>
          Portfolio
          {/* {coins.map(coin => <li key={coin}>{coin}</li>)} */}
        </div>
    )
}

export default Portfolio;