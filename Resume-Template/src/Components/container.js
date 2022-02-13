import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import RowAndColumnSpacing from "./grid"
import Name from "./name"
import './cv.css';



export default function FixedContainer() {
  return (
    <React.Fragment >
      <CssBaseline />
      <Container>
        <Box sx={{ p: 2, border: '3px' }}>
    <RowAndColumnSpacing/>
    </Box>
      </Container>
    </React.Fragment>
  );
}
