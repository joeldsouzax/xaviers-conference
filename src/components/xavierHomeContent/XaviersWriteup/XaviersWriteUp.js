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
import {Typography,Grid} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({

    root: {

        marginTop: 30,
    },

    para: {
      width: 500
    }

});


const xaviersWriteUp = (props) => {


    const {classes} = props;

    return (
        <div className={classes.root}>

            <Grid container justify="center" alignItems="center" direction="column">
                <Grid item xl={7} lg={7} md={7} sm={8} xs={8}>
                    <Typography variant="display1" gutterBottom>
                        {props.writeup.title}
                    </Typography>
                    <hr/>
                </Grid>
                <Grid item xl={7} lg={7} md={7} sm={8} xs={8}>
                    <Typography variant="title" gutterBottom>
                        {props.writeup.subtitle}
                    </Typography>
                    <hr/>
                </Grid>
                <Grid item xl={7} lg={7} md={7} sm={8} xs={8}>
                    <Typography variant="body1" gutterBottom align="center">
                        {props.writeup.paragraph1}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(xaviersWriteUp);