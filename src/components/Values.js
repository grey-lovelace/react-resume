import { Box, Card, CardContent, CardHeader, Chip, Collapse, Container, Divider, Grid, GridList, GridListTile, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
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
                {values.map(value => {
                    return <Grid item>
                        <Collapse in={true} appear={true} orientation="horizontal">
                        <Card className={classes.card}>
                            <CardHeader className={classes.content}>
                                <Typography
                                    variant={"h6"}
                                    // gutterBottom
                                >
                                    {value.title}
                                </Typography>
                            </CardHeader>
                            <CardContent className={classes.content}>
                                {/* <Divider className={classes.divider} light /> */}
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
                        </Collapse>
                    </Grid>
                })}
            </Grid>
        </Container>
    )
}

export default Values;