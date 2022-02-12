import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';

function NavBar(props) {
    const handleChange = (event, newValue) => {
        props.handleChange(newValue);
    };

    return (
        <div className={'navbar'}>
            <Tabs
                value={props.currentValue}
                indicatorColor="primary"
                // textColor=""
                onChange={handleChange}
                aria-label="Navigation Bar"
                centered
            >
                <Tab label="Home" value='Home' />
                <Tab label="Accomplishments" value='Accomplishments' />
                <Tab label="Skills" value='Skills' /> 
                <Tab label="Testimonials" value='Testimonials' />
            </Tabs>
        </div>
    );
}

export default NavBar;