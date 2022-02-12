import { Collapse, Container, Grid, Paper, Slide, Typography } from '@mui/material';
import React from "react";
import useStyles from "useStyles";

function TestimonialCard(props) {

    const classes = useStyles();

    

    return(
        // <Item item xs={12} className='testimonial-card' >
        <Slide in={true}  direction='right' style={{ transitionDelay: `${props.index * 100}ms` }}>
            <Paper elevation={3} variant="outlined" className={classes.paperRoot}>
                <Container>
                    <Typography className="testimonial-quote">{props.quote}</Typography>
                    <Typography style={{ fontWeight: 600, textAlign: 'right', padding: '15px' }}>- {props.author}</Typography>
                </Container>
            </Paper>
        </Slide>
        // </Item>
    )
}

export default TestimonialCard;