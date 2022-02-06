import React from "react";
import { Box, Container, Grid, Paper } from "@material-ui/core";
import profilePic from '../images/profile.jpeg';

function Home() {

    return(
        <div>
            <Container maxWidth='md'>
                <Paper elevation={3} variant="outlined" className='profile-card'>
                    <Grid container >
                        <Grid item container justify='center' xs={6}>
                                <img src={profilePic} ></img>
                        </Grid>
                        <Grid item container justify='center' xs={6}>
                                Other Text
                        </Grid>
                    </Grid>
            </Paper>
            </Container>
        </div>
    )
}

export default Home;