import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const axios = require('axios').default;

const Stats = () => {
    // const [posts, setPosts] = useState([])
    const gridRef = useRef();
    const [rowData, setRowData] = useState([
      {id:'1', name: 'Bitcoin', symbol: 'BTC', amount: 2, value: 20000},
      {id:'2', name: 'Ethereum', symbol: 'ETH', amount: 15, value: 25000},
      {id:'3', name: 'Cardano', symbol: 'ADA', amount: 250, value: 400}
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

    useEffect(()=>{
        //axios.get('https://jsonplaceholder.typicode.com/posts')
        /* axios.get('')
        .then(rowData => {
          console.error('rowData', rowData)
          setRowData(rowData.data)

        })
        .catch( err => {
          console.log(err)
        }) */
      }, [])

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

export default Stats;