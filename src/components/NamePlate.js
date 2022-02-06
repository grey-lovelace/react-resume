import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const NamePlate = () => {
    return (
        <div>
            <h1>
                <span className='first-name'>{'Whitney'}</span>
                <span className='last-name'>{' Lovelace'}</span>
            </h1>
            {/* <h3 className='name-sub'>{'Some other thing to say'}</h3> */}
        </div>
    );
}

export default NamePlate;