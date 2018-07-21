/**
 * InvitedSpeakers.js
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

import React,{Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import InvitedSpeakersContent from "../../components/invitedSpeakersComponent/InvitedSpeakersContent";


const styles = theme => ({

    root: {

    }

});


class InvitedSpeakers extends Component {


    state = {
        title: "Speakers",
        speakers: [
            {id:0, name:"Dr. Rajmohan", img:""},
            {id:1,name:"Fr. Roy Pereira S.J."},
            {id:2,name:"Dr. Agnelo Menezes"},
            {id:3,name:"Dr. Nandita Mangalore"},
            {id:4,name:"Dr. Alex C Varghese"},
        ]
    }


    render() {
        return (
            <div>
                <InvitedSpeakersContent title={this.state.title} speakers={this.state.speakers}/>
            </div>
        );
    }

}

InvitedSpeakers.propTypes = {

}

export default withStyles(styles)(InvitedSpeakers);