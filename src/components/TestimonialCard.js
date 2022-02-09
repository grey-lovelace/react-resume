import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "useStyles";

function TestimonialCard(props) {

    const classes = useStyles();

    return(
        <Grid item xs={12} className='testimonial-card' >
            <Paper elevation={3} variant="outlined" className={classes.paperRoot}>
                <Container>
                    <Typography className="testimonial-quote">{props.quote}</Typography>
                    <Typography style={{ fontWeight: 600, textAlign: 'right', padding: '15px' }}>- {props.author}</Typography>
                </Container>
            </Paper>
        </Grid>
    )
}

export default TestimonialCard;