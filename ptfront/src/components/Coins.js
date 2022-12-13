import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const axios = require('axios').default;

const Coins = () => {
    // const [posts, setPosts] = useState([])
    const gridRef = useRef();
    const [rowData, setRowData] = useState([
      {id:'1', name: 'Bitcoin', symbol: 'BTC'},
      {id:'2', name: 'Ethereum', symbol: 'ETH'},
      {id:'3', name: 'Sovryn', symbol: 'SOV'}
    ]); 
    const [columnDefs, setColumnDefs] = useState([
      {field: 'id', filter: true},
      {field: 'name', filter: true},
      {field: 'symbol'}
    ]);
   
    const defaultColDef = useMemo( ()=> ({
      sortable: true
    }));

    const cellClickedListener = useCallback( event => {
      console.log('cellClicked', event);
    }, []);   

    useEffect(()=>{
      if(localStorage.getItem('rowData_V1') == null ) {
        axios.get('https://api.coingecko.com/api/v3/coins/list')
        .then(rowData => {
          console.error('rowData', rowData);
          setRowData(rowData.data);
          localStorage.setItem('rowData_V1', JSON.stringify(rowData.data));
        })
        .catch( err => {
          console.log(err);
        })
      } else {
        const rowData = localStorage.getItem('rowData_V1');
        console.error('new rowData', JSON.parse(rowData));
        setRowData(JSON.parse(rowData));
      }
        //axios.get('https://jsonplaceholder.typicode.com/posts')
        
      }, [])

      useEffect(()=>{
        const coinsToLocalStorage = JSON.stringify(rowData);
        localStorage.setItem('coingecko_coins', coinsToLocalStorage)
      }, [rowData])
      
      const buttonListener = useCallback( e => {
        gridRef.current.api.deselectAll();
      }, []);
     
    return (
        <div className="ag-theme-alpine" style={{width: '50em', height: '100em'}} >
            Coins
              {/* {posts.map(post => <li key={post.id}>{post.title}</li>)} */}
              <AgGridReact
                ref={gridRef} // Ref for accessing Grid's API

                rowData={rowData} // Row Data for Rows

                columnDefs={columnDefs} // Column Defs for Columns
                defaultColDef={defaultColDef} // Default Column Properties

                animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                rowSelection='multiple' // Options - allows click selection of rows

                onCellClicked={cellClickedListener} // Optional - registering for Grid Event
                />
        </div>
    )
}

export default Coins;