import { Grid, Paper } from '@material-ui/core'
import Accomplishments from 'components/Accomplishments'
import Skills from 'components/Skills'
import Testimonials from 'components/Testimonials'
import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import NamePlate from './components/NamePlate'
import NavBar from './components/NavBar'
import TabPanel from './components/TabPanel'
import { withStyles } from "@material-ui/core/styles";
import useStyles from 'useStyles'
import '@fontsource/roboto';

function App() {
  const [currentTab, setCurrentTab] = useState('Home');

  const classes = useStyles();

  return (
    <div >
      <Grid container className={"top-banner"}>  
        <Grid item xs={12} md={4}>
          <NamePlate />
        </Grid>
        <Grid item container xs={12} md={8} justify='flex-end'>
          <NavBar currentValue={currentTab} handleChange={setCurrentTab}/>
        </Grid>
      </Grid>
      <Paper className={classes.root}>
        <TabPanel currentTab={currentTab} tabName={'Home'}>
          <Home />
        </TabPanel>
        <TabPanel currentTab={currentTab} tabName={'Accomplishments'}>
          <Accomplishments/>
        </TabPanel>
        <TabPanel currentTab={currentTab} tabName={'Skills'}>
          <Skills />
        </TabPanel>    
        <TabPanel currentTab={currentTab} tabName={'Testimonials'}>
          <Testimonials />
        </TabPanel>  
      </Paper>
      
    </div>
  )
}

export default App