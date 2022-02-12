import { Container, Grid, Paper, Typography, Grow } from "@material-ui/core";
import React from "react";
import useStyles from "useStyles";

function TestimonialCard(props) {

    const classes = useStyles();

    return(
        <Grid item xs={12} className='testimonial-card' >
            <Grow in={true} appear={true} style={{ transitionDelay: `${props.index * 100}ms` }} timeout={1000}>
                <Paper className={classes.paperRoot}>
                    <Container>
                        <Typography className="testimonial-quote">{props.quote}</Typography>
                        <Typography style={{ fontWeight: 600, textAlign: 'right', padding: '15px' }}>- {props.author}</Typography>
                    </Container>
                </Paper>
            </Grow>
        </Grid>
    )
}

export default TestimonialCard;