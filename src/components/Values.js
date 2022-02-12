import { Box, Card, CardContent, CardHeader, Chip, Grow, Container, Divider, Grid, GridList, GridListTile, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { height } from '@mui/system';
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
        // <Container maxWidth='lg' >
        <Grid container  >
            <Grid item xs={1} />
            <Grid item xs={10}>
                <Typography
                    variant={"h4"}
                    gutterBottom
                >
                    My Values
                </Typography>
                <Grid container justifyContent='space-evenly' alignContent="center" spacing={1}>
                    {values.map((value,index) => {
                        return <Grid item>
                            <Grow in={true} appear={true} style={{ transitionDelay: `${index * 100}ms` }} timeout={1000}>
                                <Card className={classes.card} sx={{ width: 200, height: 300, backgroundColor:'white'}}>
                                    <CardHeader title={value.title} className={classes.content} />
                                    <CardContent className={classes.content}>
                                        <Typography
                                            variant={"body2"}
                                        >
                                            {value.item1}
                                        </Typography>
                                        <Divider className={classes.divider} light />
                                        <Typography
                                            variant={"body2"}
                                        >
                                            {value.item2}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grow>
                        </Grid>
                    })}
                </Grid>
            </Grid>
            <Grid item xs={1} />
        </Grid>
        // </Container>
    )
}

export default Values;