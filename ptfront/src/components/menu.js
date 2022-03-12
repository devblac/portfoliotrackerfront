import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Home</Button>
      <Button>Coins</Button>
      <Button>Portfolio</Button>
      <Button>Stats</Button>
      <Button>Wiki</Button>
      <Button>Contact us</Button>
    </ButtonGroup>
  );
}
