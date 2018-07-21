/**
 * XavierHomeContent.js
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

import {Typography} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import LogoList from "./LogoList/LogoList";
import XaviersWriteUp from "./XaviersWriteup/XaviersWriteUp";

const styles = theme => ({
    root: {
        textAlign: "center",
        marginTop: 20,
    }

});


const xavierHomeContent = (props) => {


    const {classes} = props;

    return (
        <div className={classes.root}>
            <LogoList institutions={props.institutions}/>
            <XaviersWriteUp writeup={props.writeup}/>
        </div>
    );
}

export default withStyles(styles)(xavierHomeContent);