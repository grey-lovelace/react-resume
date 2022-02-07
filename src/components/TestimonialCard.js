import { Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import useStyles from "useStyles";

function TestimonialCard(props) {

    const classes = useStyles();

    return(
        <Grid item xs={12} className='testimonial-card' >
            <Paper className={classes.paperRoot}>
                <Container>
                    <p className="testimonial-quote">{props.quote}</p>
                    <p className="testimonial-author">- {props.author}</p>
                </Container>
            </Paper>
        </Grid>
    )
}

export default TestimonialCard;