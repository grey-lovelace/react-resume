import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
    const testimonials = [
        {
            quote: '“I just wanted to share how awesome our CX Strategy deck is. I’ve had a chance to step through it a couple times now with different groups and it really flows well, tells the story, etc. Thank you so much for helping us get that organized.”',
            author: 'Assistant Vice President, Customer Experience'
        },
        {
            quote: '“Your work and today’s presentation on the alignment between the annual plan – department goals – individual goals has been exceptional! This integrated and aligned work creates an effective road map that demonstrates the business value of connecting company, department and personal goals to business results! Such great work!”', 
            author: 'Executive Vice President, Chief People Officer'
        },
        {
            quote: '“Whitney led our finance leadership team through a process that took our thoughts and words and succinctly categorized goals and created measurable action items. She efficiently directed us and within an hour, we had the majority of our team goals finalized, which would have taken us much longer.”', 
            author: 'Senior Vice President, Chief Finance Officer'
        },
        {
            quote: '“You are terrific at that type of facilitation and asking good questions. I know our team would not have gotten this far and accomplished this much meaningful work without your assistance.”',
            author: 'Process Improvement Manager'
        },
        {
            quote: '“Thank you, Whitney, for all of your work in supporting the planning team and all of the departmental business plans. I appreciate you and all that you are doing to improve lives.”',
            author: 'President and CEO'
        },
    ];

    return(
        <div>
            <Container maxWidth='lg'>
            <Typography variant="h4" gutterBottom>Testimonials</Typography>
                <Grid container className='testimonial-cards-container'>
                    {testimonials.map(testimonial => {
                        return <TestimonialCard
                            author={testimonial.author}
                            quote={testimonial.quote}
                        />
                    })}
                </Grid>
            </Container>
        </div>
    )
}

export default Testimonials;