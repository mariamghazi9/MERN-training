import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Name from "./name"
import About from "./about"
import Education from "./education"
import Experience from "./experience"
import Contact from "./contact"
import Skills from "./skills"
import Image from "./image"



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
//   textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function RowAndColumnSpacing() {
  return (
      <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 800,
        flexGrow: 1,
      }}
    >
    <Box sx={{ width: '100%' }}>
    <Name />
      <Grid container columnSpacing={{ xs: 1, sm: 0, md: 0 }}>
        <Grid item xs={8}>
          <Item>
          <About/>
          <Education/>
          <Experience/>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <Image/>
          <Contact/>
          <Skills/>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Paper>
  );
}
