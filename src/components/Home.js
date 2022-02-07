import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React from "react";
import useStyles from "useStyles";
import profilePic from '../images/profile.jpeg';

function Home() {

    const classes = useStyles();

    return (
        <div>
            <Container maxWidth='md'>
                <Paper elevation={3} variant="outlined" className={classes.paperRoot}>
                    <Grid container >
                        <Grid item container justify='center' alignItems="center" xs={12} md={6}>
                            <img className='profile-pic' src={profilePic} />
                        </Grid>
                        <Grid item container justify='center' xs={12} md={6}>
                            <h1>Hello!</h1>
                            <p>My name is Whitney Lovelace. As a passionate
                                and results-oriented leader, I strive to show my
                                concern and compassion for others by helping
                                them clarify their purpose and maximize their
                                full potential. I have a proven track record of
                                increasing accountability and delivering results.
                                I pride myself on my ability to simplify
                                ambiguous and complex problems into
                                actionable solutions. I look forward to helping

                                you achieve your goals.
                            </p>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            <Container maxWidth='lg'>
                <div className='values-div'>
                    <h1>My Values</h1>
                </div>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" className='myTable'>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"><span className='bold'>Achievement</span></TableCell>
                                <TableCell align="center"><span className='bold'>Trust</span></TableCell>
                                <TableCell align="center"><span className='bold'>Continuous Improvement</span></TableCell>
                                <TableCell align="center"><span className='bold'>Compassion</span></TableCell>
                                <TableCell align="center"><span className='bold'>Leadership</span></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={0}>
                                <TableCell align="center">I value hard work and ambition.</TableCell>
                                <TableCell align="center">I value honesty and dependability.</TableCell>
                                <TableCell align="center">I value learning and growth.</TableCell>
                                <TableCell align="center">I value teamwork and caring for others.</TableCell>
                                <TableCell align="center">I value empowerment and purpose.</TableCell>
                            </TableRow>
                            <TableRow key={1}>
                                <TableCell align="center">I thrive on responsibility and accountability.</TableCell>
                                <TableCell align="center">I thrive in an environment that is transparent and open.</TableCell>
                                <TableCell align="center">I thrive when I am presented with new challenges and problems to solve.</TableCell>
                                <TableCell align="center">I thrive in a collaborative community.</TableCell>
                                <TableCell align="center">I want to make an impact and help others thrive.</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}

export default Home;