import { Container, Grid, Paper, Typography, Grow } from "@material-ui/core";
import React from "react";
import useStyles from "useStyles";

function Accomplishments() {

    const classes = useStyles();

    const strategicPlanning = {
        type: 'Strategic Planning',
        details: [
            'Pioneered a focused strategic planning process that led to a 40% reduction in the number of strategic goals and initiatives.',
            'Facilitated the development of 28 multiyear department strategic plans in one year.',
            'Established a quarterly communication series to educate associates on important strategy related topics. The first event was attended by over 800 team members.',
            'Identified and initiated the highest priority initiatives for the organization which involved 19 initiatives or programs in 2021.',
            'Implemented a strategy management tool to provide organization and transparency to the company’s strategic plans.'
        ]
    }
    const dataAnalysis = {
        type: 'Data Analysis',
        details: [
            'Created a dashboard to monitor company head count and team member effectiveness.',
            'Implemented a planning and analysis calendar to compile all relevant analysis for annual planning.',
            'Oversaw the development of a bi-monthly industry and competitor trends bulletin.',
            'Developed peer company profiles to monitor competitor performance and strategy.',
            'Assisted with the creation and implementation of an analytic lifecycle to better plan, monitor, and execute workloads.',
            'Instituted metric tracking within team and routinely presented to leadership to provide insight into team productivity.',
            'Created SQL based alerts to notify management when a truck’s estimated time of arrival was delayed.',
            'Analyzed a large operation with over 20 billed customers for conversion from legacy system. Documented current and future state processes and wrote requirements for a complicated integration between a custom-built system and a vendor system.'
        ]
    }
    const projectManagement = {
        type: 'Project Management',
        details: [
            'Established a portfolio of initiatives that support the company’s annual goals.',
            'Created a standardized initiative reporting process and oversaw the development of a company-wide dashboard to display initiative progress.',
            'Established and facilitated scrum ceremonies during an agile transformation.',
            'Converted 5 customers at 17 locations from a legacy system to a vendor system. Improved processes, integrated customer systems, and optimally configured transportation management system.',
            'Managed a project to migrate over 3,000 users to the most recent version of a business intelligence tool.',
            'Launched a new custom-built dashboard reporting tool. Created training materials and presented tool to new users.'
        ]
    }

    return(
        <div>
            <Container maxWidth='lg'>
                <h1>Accomplishments</h1>
                <Grid container spacing={2} justify='space-between'>
                    <Grid item container direction="column" md={7} xs={12} spacing={2} justify='space-between'>
                        <Grid item>
                            <Grow in={true} appear={true} style={{ transitionDelay: `${0 * 100}ms` }} timeout={1000}>
                                <Paper className={classes.paperRoot}>
                                    <Container>
                                        <Typography variant={"h6"} style={{fontWeight:'bold'}}>{strategicPlanning.type}</Typography>
                                        <ul>
                                            {strategicPlanning.details.map(detail => {
                                                return <li>
                                                    <Typography>{detail}</Typography>
                                                </li>
                                            })}
                                        </ul>
                                    </Container>
                                </Paper>
                            </Grow>
                        </Grid>
                        <Grid item>
                            <Grow in={true} appear={true} style={{ transitionDelay: `${2 * 100}ms` }} timeout={1000}>
                                <Paper className={classes.paperRootGray}>
                                    <Container>
                                        <Typography variant={"h6"} style={{fontWeight:'bold'}}>{dataAnalysis.type}</Typography>
                                        <ul>
                                            {dataAnalysis.details.map(detail => {
                                                return <li>
                                                    <Typography>{detail}</Typography>
                                                </li>
                                            })}
                                        </ul>
                                    </Container>
                                </Paper>
                            </Grow>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" md={5}  xs={12}  spacing={2}  justify='space-between'>
                        <Grid item>
                            <Grow in={true} appear={true} style={{ transitionDelay: `${1 * 100}ms` }} timeout={1000}>
                                <Paper className={classes.paperRootGray}>
                                    <Container>
                                        <Typography variant={"h6"} style={{fontWeight:'bold'}}>{projectManagement.type}</Typography>
                                        <ul>
                                            {projectManagement.details.map(detail => {
                                                return <li>
                                                    <Typography>{detail}</Typography>
                                                </li>
                                            })}
                                        </ul>
                                    </Container>
                                </Paper>
                            </Grow>
                        </Grid>
                        <Grid item>
                            <Grow in={true} appear={true} style={{ transitionDelay: `${3 * 100}ms` }} timeout={1000}>
                                <Paper className={classes.paperRoot}>
                                    <Container>
                                        <Typography variant={"h6"} style={{fontWeight:'bold'}} gutterBottom>{'Education'}</Typography>
                                        <Container>
                                            <Typography style={{fontWeight:'bold'}}>{'Master of Business Administration with a specialization in Business Analytics'}</Typography>
                                            <Typography style={{fontStyle:'italic'}}>{'Iowa State University, Ames, IA'}</Typography>
                                            <Typography>{'Graduation: Spring 2022'}</Typography>
                                            <Typography>{'Current GPA: 3.98'}</Typography>
                                            <br/>
                                            <Typography style={{fontWeight:'bold'}}>{'Bachelor of Arts Economics, Honors Mathematics'}</Typography>
                                            <Typography style={{fontStyle:'italic'}}>{'Simpson College, Indianola, IA'}</Typography>
                                            <Typography>{'Minor: Computer Science'}</Typography>
                                            <Typography>{'GPA: 3.93'}</Typography>
                                        </Container>
                                    </Container>
                                </Paper>
                            </Grow>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grow in={true} appear={true} style={{ transitionDelay: `${4 * 100}ms` }} timeout={1000}>
                            <Paper className={classes.paperRoot}>
                                <Container>
                                    <Typography variant={"h6"} style={{fontWeight:'bold'}}>{'Awards'}</Typography>
                                    <ul>
                                        <li>
                                            <Typography>{'COMAP Mathematical Contest in Modeling/Interdisciplinary Contest in Modeling'}</Typography>
                                            <ul>
                                                <li>
                                                    <Typography>{'4-time participant, receiving the following ratings:'}</Typography>
                                                </li>
                                                <ul>
                                                    <li>
                                                        <Typography>{'Finalist (1) – solution ranked in the top 2% of all solutions submitted internationally'}</Typography>
                                                    </li>
                                                    <li>
                                                        <Typography>{'Meritorious (2) – solution ranked in the top 9% (2012) and top 20% (2011) of all solutions submitted internationally'}</Typography>
                                                    </li>
                                                    <li>
                                                        <Typography>{'Honorable Mention (1) – solution ranked in the top 40% of all solutions submitted internationally'}</Typography>
                                                    </li>
                                                </ul>
                                                <li>
                                                    <Typography>{'Iowa Mathematical Modeling Contest: Finalist and award for Best Presentation'}</Typography>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Typography>{'Midwest Instruction and Computing Symposium Programming Contest: Placed in the top 25% of teams'}</Typography>
                                        </li>
                                        <li>
                                            <Typography>{'Outstanding Senior in Mathematics and Economics at Simpson College'}</Typography>
                                        </li>
                                    </ul>
                                </Container>
                            </Paper>
                        </Grow>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Accomplishments;