import { Divider, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "useStyles";

function Skill(props) {

    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <Grid container spacing={3} justify='center' alignItems="center">
                <Grid item xs={3} className="skill-type">
                    <p>{props.type}</p>
                </Grid>
                <Grid item xs={9} className="skill-details">
                    {props.details.map(detail => {
                        return <p>• {detail}</p>
                    })}
                </Grid>
            </Grid>
            <Divider className={classes.thickDivider} />
        </Grid>
    )
}

export default Skill;