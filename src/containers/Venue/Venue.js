/**
 * Venue.js
 * This had better be a single object written in JavaScript, if you like your job.
 * Polluting the global space with objects is not good citizenship.
 * Have a nice day.
 * -- Management
 *
 *
 *
 * @version 0.1
 * @author  joel
 * @updated 22/07/2018
 * @project xaviers-conference
 *
 *
 *
 */

import React,{Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({

    root: {

    }

});


class Venue extends Component {


    render() {
        return (
            <div>
                Venue
            </div>
        );
    }

}

Venue.propTypes = {

}

export default withStyles(styles)(Venue);