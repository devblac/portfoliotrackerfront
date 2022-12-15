import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { axiosInstance } from '../axios';

const axios = require('axios').default;

const Stats = () => {
    const [response, setResponse] = useState([])
    const gridRef = useRef();
    const [rowData, setRowData] = useState([
      {id:'1', name: 'Bitcoin', symbol: 'BTC', amount: 2, value: 36004},
      {id:'2', name: 'Ethereum', symbol: 'ETH', amount: 15, value: 16502},
      {id:'3', name: 'Cardano', symbol: 'ADA', amount: 250, value: 75}
    ]); 
    const [columnDefs, setColumnDefs] = useState([
      {field: 'id', filter: true},
      {field: 'name', filter: true},
      {field: 'symbol'},
      {field: 'amount'},
      {field: 'value'}
    ]);
   
    const defaultColDef = useMemo( ()=> ({
      sortable: true
    }));

    const cellClickedListener = useCallback( event => {
      console.log('cellClicked', event);
    }, []);   

    useEffect( ()=> {
      try {
        const response = axiosInstance.get('get_portfolio');
        setResponse(response);
      } catch (error) {
        console.error('error trying to get user portfolio', error);
        // TODO: handle errors
      }
    }, []);
        /* axios.get('')
        .then(rowData => {
          console.error('rowData', rowData)
          setRowData(rowData.data)

        })
        .catch( err => {
          console.log(err)
        })
        setResponse(response);
      }, []) */

    const buttonListener = useCallback( e => {
      gridRef.current.api.deselectAll();
    }, []);
    
    return (
        <div className="ag-theme-alpine" style={{width: '80em', height: '20em'}} >
            
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

export default Stats;