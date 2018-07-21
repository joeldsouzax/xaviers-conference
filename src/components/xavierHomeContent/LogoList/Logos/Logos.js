/**
 * Logos.js
 * This had better be a single object written in JavaScript, if you like your job.
 * Polluting the global space with objects is not good citizenship.
 * Have a nice day.
 * -- Management
 *
 *
 *
 * @version 0.1
 * @author  joel
 * @updated 21/07/2018
 * @project xaviers-conference
 *
 *
 *
 */

import React from 'react';
import {Paper,Typography} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import XaviersLogo from '../../../../assets/logos/Xavier.jpg';
import CreightonLogo from '../../../../assets/logos/Creighton.png';

const styles = theme => ({

    root: {},
    size: {
        width: "100%",
    },

    paper: {
        padding: 15,

    }

});


const logos = (props) => {

    const {classes} = props;

    let logoComponent = null;

    switch (props.type) {

        case "xaviers":
            logoComponent = (
                <Paper className={classes.paper}>
                    <img className={classes.size} src={XaviersLogo} alt={props.data}/>
                    <Typography variant="caption" gutterBottom>
                        {props.data}
                    </Typography>
                </Paper>
            );
            break;

        case "creighton":
            logoComponent = (
                <Paper className={classes.paper}>
                    <img className={classes.size} src={CreightonLogo} alt={props.data}/>
                    <Typography variant="caption" gutterBottom>
                        {props.data}
                    </Typography>
                </Paper>
            );
            break;

        default:
            logoComponent = (
                <h1>
                    No logo selected
                </h1>
            );
            break;
    }

    return logoComponent;
}

export default withStyles(styles)(logos);