import { Avatar, Grid } from '@material-ui/core';
import React from 'react';
import profilePic from '../images/profile.jpeg';

const NamePlate = () => {
    return (
            <Grid container alignItems='center' spacing={3} className='name-plate'>
                <Grid item >
                    <Avatar src={profilePic} />
                </Grid>
                <Grid item >
                    <h1>
                        <span className='first-name'>{'Whitney'}</span>
                        <span className='last-name'>{' Lovelace'}</span>
                    </h1>
                </Grid>
            </Grid>
            // {/* <h3 className='name-sub'>{'Some other thing to say'}</h3> */}
    );
}

export default NamePlate;