import { Box, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "useStyles";
import profilePic from '../images/profile.jpeg';
import Values from "./Values";

function Home() {

    const classes = useStyles();

    return (
        <div>
            <Container maxWidth='sm'>
                <Paper elevation={3} variant="outlined" className={classes.paperRootWithPadding}>
                    <Grid container >
                        <Grid container item justify='center' alignItems="center" xs={12} md={2}>
                            <img className='profile-pic' src={profilePic} />
                        </Grid>
                        <Grid container item xs={12} md={10}>
                            <Container>
                                <Typography
                                    variant={"h4"}
                                >
                                    Hello,
                                </Typography>
                                <Typography
                                    // variant={"body2"}
                                >
                                    My name is Whitney Lovelace. As a passionate
                                    and results-oriented leader, I strive to show my
                                    concern and compassion for others by helping
                                    them clarify their purpose and maximize their
                                    full potential. I have a proven track record of
                                    increasing accountability and delivering results.
                                    I pride myself on my ability to simplify
                                    ambiguous and complex problems into
                                    actionable solutions. I look forward to helping
                                    you achieve your goals.
                                </Typography>
                            </Container>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            <br></br>
            <Values />
        </div>
    )
}

export default Home;