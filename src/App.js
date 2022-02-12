import Skills from 'components/Skills'
import Testimonials from 'components/Testimonials'
import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import NamePlate from './components/NamePlate'
import NavBar from './components/NavBar'
import TabPanel from './components/TabPanel'
// import { withStyles } from "@material-ui/core/styles";
import useStyles from 'useStyles'
import '@fontsource/roboto';
import { AppBar, Box, Grid } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';


const App = () => {
  const [currentTab, setCurrentTab] = useState('Home');

  const primaryColor = '#2c3b57'
  const secondaryColor = '#cadee5'
  const tertiaryColor = '#a5a5a5'

  const theme = createTheme({
    palette: {
      // type: 'light',
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
    },
    shape: {
      borderRadius: '15px'
    },
    components: {
      MuiCardHeader: {
        styleOverrides: {
              root: {
                // backgroundColor: tertiaryColor,
                // color: "white"
              }
            }
      },
      MuiCardContent: {
        styleOverrides: {
              root: {
                backgroundColor: 'white',
              }
            }
      },
      // MuiCardHeader-title: {
      //   //could also be placed inside header class
      //   backgroundColor: "#FCFCFC"
      // },
      // MuiCardHeader-subheader: {
      //   backgroundImage: "linear-gradient(to bottom right, #090977, #00d4ff);"
      // },
      // "MuiCardContent-root: {
      //   backgroundImage: "linear-gradient(to bottom right, #00d4ff, #00ff1d);"
      // }
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: '15px',
            borderColor: 'primary',
            backgroundColor: secondaryColor
          }
        }
      },
    }
  });
  

  return (
    <div >
      <ThemeProvider theme={theme}>

        <AppBar position='static'>
          <Grid container>  
            <Grid item container xs={12} md={4} justifyContent='flex-start' alignItems='center'>
              <Grid item>
                <NamePlate />
              </Grid>
            </Grid>
            <Grid item container xs={12} md={8} justifyContent={'flex-end' }>
              <NavBar currentValue={currentTab} handleChange={setCurrentTab}/>
            </Grid>
          </Grid>
        </AppBar>
      
        <Box sx={{backgroundColor: '#f3f3f3', bottom: '0%'}}>
          <TabPanel currentTab={currentTab} tabName={'Home'}>
            <Home />
          </TabPanel>
          <TabPanel currentTab={currentTab} tabName={'Accomplishments'}>
            Accomplishments (Coming Soon)
          </TabPanel>
          <TabPanel currentTab={currentTab} tabName={'Skills'}>
            <Skills />
          </TabPanel>    
          <TabPanel currentTab={currentTab} tabName={'Testimonials'}>
            <Testimonials />
          </TabPanel>  
        </Box>
      </ThemeProvider>

    </div>
  )
}

export default App