import React, { useState, useEffect, useRef, useMemo, useCallback, Fragment } from 'react';
import { axiosInstance } from '../axios';
import useAuth from '../hooks/useAuth';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const theme = createTheme();

const axios = require('axios').default;

const Portfolio = () => {
    const [coin, setCoin] = useState()
    const [amount, setAmount] = useState()
    const [transactionType, setTransactionType] = useState()
    const [loading, setLoading] = useState()
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

    useEffect(()=>{
      /* try {
        const response = axiosInstance.get('logout')
        console.log('respose', response);
      } catch (error) {
        console.error('error when logout', error);
        // TODO: handle errors
      }   */
    }, [])

    const defaultColDef = useMemo( ()=> ({
      sortable: true
    }));

    const cellClickedListener = useCallback( event => {
      console.log('cellClicked', event);
    }, []);   

    const buttonListener = useCallback( e => {
      gridRef.current.api.deselectAll();
    }, []);

    function onCoinChange(event) {
      setCoin(event.target.value)
    }
    function onAmountChange(event) {
      setAmount(event.target.value)
    }
    function onTransactionTypeChange(event) {    
      setTransactionType(event.target.value)
    }

    async function onAddTransaction(event) {
      event.preventDefault()
      setLoading(true)
        try {
            const response = await axiosInstance.post('add_transaction', JSON.stringify({
                symbol: coin,
                amount,
                transaction_type: transactionType
            }))
          setLoading(false)
        } catch (error) {
          setLoading(false)
          console.error('error', error);
          // TODO: handle errors
        }
    }

    return (
      <div>
        <Fragment>
            <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <AddCircleOutlineOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Administrar Portfolio
                </Typography>
                <Box component="form" noValidate onSubmit={onAddTransaction} sx={{ mt: 3 }}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                    <Select
                      autoComplete="coin"
                      sx={{ minWidth: 90 }}
                      labelId="coin"
                      id="coin"
                      value={coin}
                      label="Coin ID"
                      onChange={onCoinChange}
                    >
                      <MenuItem value={'BTC'}>BTC</MenuItem>
                      <MenuItem value={'ETH'}>ETH</MenuItem>
                      <MenuItem value={'USDT'}>USDT</MenuItem>
                      <MenuItem value={'BNB'}>BNB</MenuItem>
                      <MenuItem value={'XRP'}>XRP</MenuItem>
                      <MenuItem value={'DOGE'}>DOGE</MenuItem>
                    </Select>
                    </Grid>
                    <Grid item xs={4}>
                    <TextField
                        required
                        fullWidth
                        id="amount"
                        label="Amount"
                        name="amount"
                        autoComplete="amount"
                        onChange={onAmountChange}
                    />
                    </Grid>
                    <Grid item xs={4}>
                    <Select
                      sx={{ minWidth: 120 }}
                      labelId="transactionType"
                      id="transactionType"
                      value={transactionType}
                      label="Operación"
                      onChange={onTransactionTypeChange}
                    >
                      <MenuItem value={'buy'}>Compra</MenuItem>
                      <MenuItem value={'sell'}>Venta</MenuItem>
                    </Select>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                >
                    Agregar
                </Button>
                </Box>
                <Grid item xs={12} className="ag-theme-alpine" style={{width: '80em', height: '20em', align: 'center'}} >
                <AgGridReact
                  ref={gridRef} // Ref for accessing Grid's API

                  rowData={rowData} // Row Data for Rows

                  columnDefs={columnDefs} // Column Defs for Columns
                  defaultColDef={defaultColDef} // Default Column Properties

                  animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                  rowSelection='multiple' // Options - allows click selection of rows

                  onCellClicked={cellClickedListener} // Optional - registering for Grid Event
                  />
              </Grid>
            </Box>
            </Container>
        </ThemeProvider>
        </Fragment>
      </div>
    )
}

export default Portfolio;