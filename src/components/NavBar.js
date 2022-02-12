import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import HomeIcon from '@material-ui/icons/Home';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
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
                <Tab label="Home" value='Home' icon={<HomeIcon/>}/>
                <Tab label="Accomplishments" value='Accomplishments'  icon={<CheckCircleIcon/>} />
                <Tab label="Skills" value='Skills' icon={<BubbleChartIcon/>}/> 
                <Tab label="Testimonials" value='Testimonials' icon={<FormatQuoteIcon/>} />
            </Tabs>
        </div>
    );
}

export default NavBar;