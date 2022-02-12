import { Box, Card, CardContent, Grow, Container, Divider, Grid, GridList, GridListTile, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "useStyles";

function Values() {
    const values = [
        {
            title: 'Achievement',
            item1: 'I value hard work and ambition.',
            item2: 'I thrive on responsibility and accountability.'
        },
        {
            title: 'Trust',
            item1: 'I value honesty and dependability.',
            item2: 'I thrive in an environment that is transparent and open.'
        },
        {
            title: 'Continuous Improvement',
            item1: 'I value learning and growth.',
            item2: 'I thrive when I am presented with new challenges and problems to solve.'
        },
        {
            title: 'Compassion',
            item1: 'I value teamwork and caring for others.',
            item2: 'I thrive in a collaborative community.'
        },
        {
            title: 'Leadership',
            item1: 'I value empowerment and purpose.',
            item2: 'I want to make an impact and help others thrive.'
        },
    ];

    const classes = useStyles();

    return (
        <Container maxWidth='lg'>
            <Box className='values-div'>
                <Typography
                    variant={"h4"}
                    gutterBottom
                >
                    My Values
                </Typography>
            </Box>
            <Grid container justify='space-around' alignItems="center" spacing={1}>
                {values.map((value,index) => {
                    return (
                        <Grid item>
                            <Grow in={true} appear={true} style={{ transitionDelay: `${index * 100}ms` }} timeout={1000}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.content}>
                                        <Typography
                                            variant={"h6"}
                                            gutterBottom
                                        >
                                            {value.title}
                                        </Typography>
                                        <Divider className={classes.divider} light />
                                        <Typography
                                            variant={"caption"}
                                        >
                                            {value.item1}
                                        </Typography>
                                        <Divider className={classes.divider} light />
                                        <Typography
                                            variant={"caption"}
                                        >
                                            {value.item2}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grow>
                        </Grid>
                )})}
            </Grid>
        </Container>
    )
}

export default Values;