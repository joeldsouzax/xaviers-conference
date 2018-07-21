/**
 * XaviersHome.js
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


import React, {Component} from 'react';
import XavierHomeContent from "../../components/xavierHomeContent/XavierHomeContent";



class XaviersHome extends Component {

    state = {
        institutions: [
            {id:1,type:"xaviers", data:"St. Xavier's College, Mumbai"},
            {id:2,type:"creighton", data: "Creighton University, Omaha, NE, USA" },
        ],

        writeup: {
            title: "From Health to Well Being:",
            subtitle: "An Interdisciplinary approach from Fundamental Sciences to Translational Medicine",
            paragraph1: "Under the auspices of both St. Xavier's College, Mumbai, India and Creighton University, Omaha, NE, USA, our 1st joint International Conference entitled “From Health to Well Being:  An Interdisciplinary approach from Fundamental Sciences to Translational Medicine” will be held at the iconic campus of St. Xavier's College, Mumbai, India from 09 –11 January 2019."
        }
    }


    render() {
        return (
            <div>
                <XavierHomeContent institutions={this.state.institutions} writeup={this.state.writeup}/>
            </div>
        );
    }

}




export default XaviersHome;