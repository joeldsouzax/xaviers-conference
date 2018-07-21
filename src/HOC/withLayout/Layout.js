/**
 * Layout * This had better be a single object written in JavaScript, if you like your job.
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
import {withStyles,createMuiTheme,MuiThemeProvider} from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Button,IconButton,Drawer,List,ListItem,ListItemText,Divider,Avatar,Grid,Hidden,Tab,Tabs,Paper} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import MenuIcon from '@material-ui/icons/Menu';
import PowerSettingNew from '@material-ui/icons/PowerSettingsNew';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {withRouter} from 'react-router-dom';


//nav images
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import {ImportExport} from "@material-ui/icons";
import Home from "@material-ui/icons/Home";


const drawerWidth = 240;


const xaviersTheme = createMuiTheme({

    palette: {
        primary: {
            main: "#4527a0",
            light: "#7953d2",
            dark: "#000070"
        },

        secondary: {
            main: "#1e88e5",
            light: "#6ab7ff",
            dark: "#005cb2"
        }
    }
});


const style = theme => ({

    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },

    menuButton : {
        color: 'white'
    },

    drawerPaper: {
        position: 'absolute',
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },


    listIcon: {
        color: theme.palette.primary.main,
    }
});


class Layout extends React.Component {

    state = {
        isDrawerOpen: false,
        value:0,
    }

    handleChange = (event, value) => {
        this.setState({ value });
        switch (value){
            case (0):
                this.props.history.push('/');;
                break;
            case 1:
                this.props.history.push('/about');;
                break;
            case 2:
                this.props.history.push('/venue');;
                break;
            case 3:
                this.props.history.push('/registration');;
                break;
            case (4):
                this.props.history.push('/invitedspeakers');;
                break;
            case (5):
                this.props.history.push('/organisingcommittee');;
                break;
            case (6):
                this.props.history.push('/connect');;
                break;
            default:
                console.log("nothing");
                break;
        }
    };


    drawerHandler = () => {
        this.setState({
            isDrawerOpen: true
        });

        console.log("Drawer opened")
    }


    handleDrawerClose = () => {
        this.setState({
            isDrawerOpen: false
        });
    }


    handleInvitedSpeakersNav = () => {
        this.props.history.push('/invitedspeakers');
        this.setState({
            value:4
        });
    }


    handleHomeNavigation = () => {
        this.props.history.push('/');
        this.setState({
            value:0
        });
    }


    handleAboutNavigation = () => {
        this.props.history.push("/about");
        this.setState({
            value:1
        });

    }

    handleVenueNavigation = () => {
        this.props.history.push("/venue");
        this.setState({
            value:2
        });

    }

    handleRegistrationNavigation = () => {
        this.props.history.push("/registration");
        this.setState({
            value:3
        });
    }

    hangleOrganisingCommitteeNavigation = () => {
        this.props.history.push('/organisingcommittee');;
        this.setState({
            value:5
        });
    }

    handleConnectNavigation = () => {
        this.props.history.push('/connect');;
        this.setState({
            value:6
        });
    }






    render() {
        const {classes} = this.props;

        return (
            <MuiThemeProvider theme={xaviersTheme}>
                <AppBar position="static" color="primary">
                    <Toolbar>


                        <Grid container justify="space-between" alignItems="center">
                            <Grid item>
                                <IconButton className={classes.menuButton} onClick={this.drawerHandler}>
                                    <MenuIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <Typography variant="title" color="inherit">
                                    Xaviers Conference
                                </Typography>
                            </Grid>
                            <Grid item>
                                <IconButton className={classes.menuButton} onClick={this.drawerHandler}>
                                    <PowerSettingNew/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>


                <Hidden smDown>
                    <Paper className={classes.root}>
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Home"  value={0}/>
                            <Tab label="About" />
                            <Tab label="Venue" />
                            <Tab label="Registration" />
                            <Tab label="Invited Speakers" value={4} />
                            <Tab label="Organising Committee" />
                            <Tab label="Connect" />
                        </Tabs>
                    </Paper>
                </Hidden>



                <Drawer
                    variant="persistent"
                    open={this.state.isDrawerOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {xaviersTheme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>



                    <List component="nav">
                        <ListItem button onClick={this.handleHomeNavigation}>
                            <Avatar>
                                <Home className={classes.listIcon}/>
                            </Avatar>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <Divider/>
                        <ListItem button onClick={this.handleAboutNavigation}>
                            <Avatar>
                                <ImageIcon/>
                            </Avatar>
                            <ListItemText primary="About" />
                        </ListItem>
                        <Divider/>
                        <ListItem button onClick={this.handleVenueNavigation}>
                            <Avatar>
                                <WorkIcon/>
                            </Avatar>
                            <ListItemText primary="Venue" />
                        </ListItem>
                        <Divider/>
                        <ListItem button onClick={this.handleRegistrationNavigation}>
                            <Avatar>
                                <WorkIcon/>
                            </Avatar>
                            <ListItemText primary="Registration"/>
                        </ListItem>
                        <ListItem button onClick={this.handleInvitedSpeakersNav}>
                            <Avatar>
                                <WorkIcon/>
                            </Avatar>
                            <ListItemText primary="Invited Speakers"/>
                        </ListItem>
                        <ListItem button onClick={this.hangleOrganisingCommitteeNavigation}>
                            <Avatar className={classes.listIcon}>
                                <WorkIcon/>
                            </Avatar>
                            <ListItemText primary="Organising Committee"/>
                        </ListItem>
                        <ListItem button onClick={this.handleConnectNavigation}>
                            <Avatar>
                                <ImportExport className={classes.listIcon}/>
                            </Avatar>
                            <ListItemText primary="Connect"/>
                        </ListItem>
                    </List>


                </Drawer>
                {this.props.children}

                <Button className={classes.fab} variant="fab" color="secondary" >
                    <EditIcon/>
                </Button>
            </MuiThemeProvider>
        );
    }

}


export default withRouter(withStyles(style)(Layout));