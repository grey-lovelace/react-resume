import { Divider, Grid, Typography } from '@mui/material';
import React from "react";
import useStyles from "useStyles";

function Skill(props) {

    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <Grid container justify='center' alignItems="center">
                <Grid item sm={3} xs={12} className="skill-type">
                    <Typography variant={"h6"}>{props.type}</Typography>
                </Grid>
                <Grid item sm={9} xs={12} >
                    {props.details.map(detail => (
                        <Typography
                            className="skill-details"
                            variant={"body1"}
                        >
                            • {detail}
                        </Typography>
                    ))}
                </Grid>
            </Grid>
            <Divider className={classes.thickDivider} />
        </Grid>
    )
}

export default Skill;