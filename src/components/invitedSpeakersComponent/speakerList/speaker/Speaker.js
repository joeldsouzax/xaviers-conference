/**
 * Speaker.js
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

import React from 'react';
import {Card,CardMedia,CardContent,IconButton,List,ListItem,ListItemSecondaryAction,ListItemText} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import {ChevronRight} from "@material-ui/icons";

const styles = theme => ({

    root: {
        width: 345,
    }

});


const speaker = (props) => {


    const {classes} = props;

    return (
        <Card className={classes.root}>
            <CardMedia>

            </CardMedia>
            <CardContent>
                {props.name}
            </CardContent>
            <List>
                <ListItem button>
                    <ListItemText primary="See Profile"/>
                    <ListItemSecondaryAction>
                        <IconButton color="primary">
                            <ChevronRight/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </Card>
    );
}

export default withStyles(styles)(speaker);