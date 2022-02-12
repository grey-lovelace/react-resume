import { Avatar, Container, Grid, Typography, Box } from '@mui/material';
import React from 'react';
import profilePic from '../images/profile.jpeg';

const NamePlate = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item >
                    <Avatar src={profilePic} className='avatar'/>
                </Grid>
                <Grid item >
                    <Typography variant='h4'>
                        <span >{'Whitney'}</span>
                        <span className='last-name'>{' Lovelace'}</span>
                    </Typography>
                </Grid>
            </Grid>
            {/* <h3 className='name-sub'>{'Some other thing to say'}</h3> */}
        </Container>
    );
}

export default NamePlate; 