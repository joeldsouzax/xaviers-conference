/**
 * LogoList.js
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
import {Grid} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import Logos from "./Logos/Logos";

const styles = theme => ({

    root: {
        marginTop: 20,
    }

});


const logoList = (props) => {


    const {classes} = props;

    const logoList = props.institutions.map(institute => {
       return (
           <Grid item xs={6} sm={6} md={6} lg={3} xl={3}>
               <Logos key={institute.id} type={institute.type} data={institute.data}/>
           </Grid>
       )
    });



    return (
        <Grid container justify="center" alignContent="center" alignItems="center" spacing={8} className={classes.root}>
            {logoList}
        </Grid>
    );
}

export default withStyles(styles)(logoList);