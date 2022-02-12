import { Paper, Container, Grid, Slide, Typography } from '@mui/material';
import React from "react";
import useStyles from "useStyles";

function Skill(props) {

    const classes = useStyles();

    return (
        <Slide in={true}  direction='right' style={{ transitionDelay: `${props.index * 100}ms` }}>
            <Paper elevation={3} variant="outlined" >
                <Container>
                    <Grid container justifyContent='center' alignItems="center">
                        <Grid item sm={3} xs={12} className="skill-type">
                            <Typography variant={"h6"}>{props.type}</Typography>
                        </Grid>
                        <Grid item sm={9} xs={12} >
                            {props.details.map(detail => (
                                <Typography
                                    className="skill-details"
                                    variant={"body1"}
                                    style={{ padding: '10px' }}
                                >
                                    • {detail}
                                </Typography>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </Slide>
    )
}

export default Skill;