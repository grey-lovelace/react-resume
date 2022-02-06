import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function NavBar(props) {
    const handleChange = (event, newValue) => {
        props.handleChange(newValue);
    };

    return (
        // <Paper className={'navbar'} square>
            <Tabs
                value={props.currentValue}
                indicatorColor="primary"
                // textColor=""
                onChange={handleChange}
                aria-label="Navigation Bar"
                centered
                
            >
                <Tab label="Home" />
                <Tab label="Accomplishments" />
                <Tab label="Skills" />
                <Tab label="Testimonials" />
            </Tabs>
        // </Paper>
    );
}

export default NavBar;