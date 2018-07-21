/**
 * SpeakerList.js
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

import {withStyles} from '@material-ui/core/styles';
import Speaker from "./speaker/Speaker";
import {Grid} from "@material-ui/core";

const styles = theme => ({

    root: {}

});


const speakerList = (props) => {


    const speakerList = props.speakers.map(speaker => {
       return (
           <Grid item>
               <Speaker name={speaker.name}/>
           </Grid>
       );
    });

    return (
        <Grid container justify="center" alignItems="center" spacing={16}>
            {speakerList}
        </Grid>
    );
}

export default withStyles(styles)(speakerList);