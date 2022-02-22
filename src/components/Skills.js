import { Container, Grid, Typography, Collapse } from "@material-ui/core";
import React from "react";
import Skill from "./Skill";

function Skills() {
    const skills = [
        {
            type: 'Leadership',
            details: [
                'Successfully leads, mentors, and coaches a team of strategy specialists',
                'Provides coaching and support to project managers and business analysts working on strategic initiatives'
            ]
        },
        {
            type: 'Project Management',
            details: [
                'Experience leading complex and high-profile initiatives such legacy system conversions, defining corporate mission and values, and the development of analytical solutions',
                'Ability to define project objectives, establish a timeline, and organize a team to accomplish results'
            ]
        },
        {
            type: 'Communication',
            details: [
                'Strong written and oral communication skills with an ability to simplify complex information into an easy to understand and digestible format'
            ]
        },
        {
            type: 'Public Speaking',
            details: [
                'Comfortable presenting to large audiences at all level of the organization including executive management and board-level presentations'
            ]
        },
        {
            type: 'Decision Making and Problem Solving',
            details: [
                'Proven track record of getting “things” done',
                'Ability to synthesize information from disparate data sources to make recommendations'
            ]
        },
        {
            type: 'Collaboration',
            details: [
                'Strong partner who has worked with every area of the organization'
            ]
        },
        {
            type: 'Facilitation',
            details: [
                'Expert at leading and organizing meetings to achieve stated objectives'
            ]
        },
        {
            type: 'Strategic Thinking',
            details: [
                'Establishes a department and team vision, sets goals, and collaboratively identifies action items to achieve those goals'
            ]
        },
        {
            type: 'Data Analysis',
            details: [
                'Experience building mathematical models including regressions and decision trees\nExtensive experience with data analysis and SQL reporting'
            ]
        },
    ];

    return (
        <div>
            <Container maxWidth='lg'>
                <Typography variant={"h4"} gutterBottom>Skills</Typography>
                <Collapse in={true} appear={true} timeout={1000}>
                    <Grid container >
                        {skills.map(skill => {
                            return <Skill
                                type={skill.type}
                                details={skill.details}
                            />
                        })}
                    </Grid>
                </Collapse>
            </Container>
        </div>
    )
}

export default Skills;