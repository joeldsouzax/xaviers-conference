/**
 * XaviersWriteUp.js
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
import PropTypes from 'prop-types';
import {Typography} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({

    root: {
        margin: "20%",
        marginTop: 30,
    }

});


const xaviersWriteUp = (props) => {


    const {classes} = props;

    return (
        <div className={classes.root}>
            <Typography variant="display3" gutterBottom>
                {props.writeup.title}
            </Typography>
            <hr/>
            <Typography variant="display1" gutterBottom>
                {props.writeup.subtitle}
            </Typography>
            <hr/>
            <Typography variant="body1" gutterBottom>
                {props.writeup.paragraph1}
            </Typography>
        </div>
    );
}

export default withStyles(styles)(xaviersWriteUp);