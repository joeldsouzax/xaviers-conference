/**
 * InvitedSpeakersContent.js
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
import {Typography,Divider} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import SpeakerList from "./speakerList/SpeakerList";

const styles = theme => ({

    root: {
        textAlign: "center",
        margin: 20,
    },

    speakerSection: {
      margin: 15,
    }

});


const invitedSpeakersContent = (props) => {

    const {classes} = props;

    return (
        <div className={classes.root}>
            <Typography variant="display3" gutterBottom>
                {props.title}
            </Typography>
            <Divider/>
            <div className={classes.speakerSection}>
                <SpeakerList speakers={props.speakers}/>
            </div>
        </div>
    );
}

export default withStyles(styles)(invitedSpeakersContent);