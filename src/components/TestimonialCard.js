import { Card, Container, createTheme, Grid, makeStyles, Paper } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import React from "react";
import useStyles from "useStyles";

function TestimonialCard(props) {

    const classes = useStyles();

    return(
        <div className='testimonial-cards'>
            <Grid item xs={12} className='testimonial-card' >
                <Paper className={classes.paperRoot}>
                    <Container>
                        <p className="testimonial-quote">{props.quote}</p>
                        <p className="testimonial-author">{props.author}</p>
                    </Container>
                </Paper>
            </Grid>
        </div>
    )
}

export default TestimonialCard;