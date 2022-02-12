import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import HomeIcon from '@mui/icons-material/Home';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from 'react';

function NavBar(props) {
    const handleChange = (event, newValue) => {
        props.handleChange(newValue);
    };

    return (
        // <div className={'navbar'}>
            <Tabs
                value={props.currentValue}
                indicatorColor="secondary"
                textColor="white"
                onChange={handleChange}
                aria-label="Navigation Bar"
                centered
                
            >
                <Tab label="Home" value='Home' icon={<HomeIcon/>}/>
                {/* <Tab label="Accomplishments" value='Accomplishments'  icon={<CheckCircleIcon/>} />*/
                <Tab label="Skills" value='Skills' icon={<BubbleChartIcon/>}/> }
                <Tab label="Testimonials" value='Testimonials' icon={<FormatQuoteIcon/>} />
            </Tabs>
        // </div>
    );
}

export default NavBar;