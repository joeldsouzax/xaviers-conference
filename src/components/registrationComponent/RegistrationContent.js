/**
 * RegistrationContent.js
 * This had better be a single object written in JavaScript, if you like your job.
 * Polluting the global space with objects is not good citizenship.
 * Have a nice day.
 * -- Management
 *
 *
 *
 * @version 0.1
 * @author  joel
 * @updated 23/07/2018
 * @project xaviers-conference
 *
 *
 *
 */


import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import RegistrationForm from "./RegistratioForm/RegistrationForm";

const styles = theme => ({

    root: {
        textAlign: "center"
    }

});


const registrationContent = (props) => {

    const {classes} = props;

    return (
        <div className={classes.root}>
            <RegistrationForm RegistrationForm={props.RegistrationForm}/>
        </div>
    );
}

export default withStyles(styles)(registrationContent);