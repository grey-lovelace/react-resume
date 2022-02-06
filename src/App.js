import { Grid, Paper } from '@material-ui/core'
import Home from './components/Home'
import React, { Component, useState } from 'react'
import './App.css'
import NamePlate from './components/NamePlate'
import NavBar from './components/NavBar'
import TabPanel from './components/TabPanel'

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className={"top-banner"}>
      <Grid container spacing={3}>  
        <Grid item xs={6}>
          <NamePlate />
        </Grid>
        <Grid item xs={6}>
          <NavBar currentValue={currentTab} handleChange={setCurrentTab}/>
        </Grid>
      </Grid>
      <Paper square>
        <TabPanel value={currentTab} index={0}>
          <Home />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          Accomplishments
        </TabPanel>
        <TabPanel value={currentTab} index={2}>
          Skills
        </TabPanel>    
        <TabPanel value={currentTab} index={3}>
          Testimonials
        </TabPanel>  
      </Paper>
      
    </div>
  )
}

export default App