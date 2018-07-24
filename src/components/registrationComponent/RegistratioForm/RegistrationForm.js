/**
 * RegistrationForm.js
 * This had better be a single object written in JavaScript, if you like your job.
 * Polluting the global space with objects is not good citizenship.
 * Have a nice day.
 * -- Management
 *
 *
 *
 * @version 0.1
 * @author  joel
 * @updated 24/07/2018
 * @project xaviers-conference
 *
 *
 *
 */


import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {withFormik} from 'formik';
import Yup from 'yup';
import {Select,
    FormControl,
    FormControlLabel,
    FormGroup,
    MenuItem,
    TextField,
    Paper,
    Typography,Grid,FormLabel,InputLabel,InputAdornment,Button} from '@material-ui/core';
import Icon from '@material-ui/core/Icon/Icon';



const styles = theme => ({

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },

    longTextFields: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,

    },

    shortTextFields:{
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    paper: {
        padding: 20,
        margin: 30,
    },

    affiliatedDiv: {
        padding: 20,
    },

    institutions: {
        border: '1px solid black',
        padding: 20,
        marginTop: 20,
    },

    submitButton: {
        backgroundColor: '#007bff',
        margin: theme.spacing.unit,
    }
});



const form = (props) => {

    const {
        classes,
        values,
        handleChange,
        handleSubmit

    } = props;

    return (

        <Grid container alignItems="center" justify="center" spacing={8}>
            <Grid item xs={12} sm={9} md={8} lg={8} xl={6}>
                <Paper className={classes.paper} elevation={1}>
                    <form autoComplete="off">
                        <FormGroup>
                        <TextField
                            id="date"
                            label="Date of Birth"
                            type="date"
                            value={values.DOB}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            id="First-Name"
                            label="First-Name"
                            placeholder="First-Name"
                            margin="normal" value={values.firstName}
                            className={classes.textField}
                        />
                        <TextField
                            id="Last-Name"
                            label="Last Name"
                            placeholder="Last Name"
                            margin="normal" value={values.lastName}
                            className={classes.textField}
                        />
                        <TextField id="Email"
                                   label="Email Address"
                                   placeholder="Email Address"
                                   margin="normal"
                                   value={values.personalEmail} className={classes.textField}/>
                        <TextField
                            id="address"
                            label="Address"
                            placeholder="Address"
                            margin="normal" value={values.address} className={classes.textField}
                        />
                        <TextField
                            id="number"
                            label="Phone Number"
                            placeholder="Phone Number" className={classes.textField}
                            margin="normal" value={values.number}
                        />
                           <FormGroup  className={classes.institutions}>
                               <TextField id="institute"
                                          label="Affiliated Institution Name"
                                          placeholder="Company/University/College"
                                          margin="normal" fullWidth
                                          value={values.longTextFields}/>
                               <div className={classes.affiliatedDiv}>
                                   <FormGroup>
                                       <FormLabel>
                                           Address:
                                       </FormLabel>
                                       <TextField
                                           id="city"
                                           placeholder="City" className={classes.shortTextFields}
                                           margin="normal" value={values.number}
                                       />
                                       <TextField
                                           id="state"
                                           placeholder="State" className={classes.shortTextFields}
                                           margin="normal" value={values.number}
                                       />

                                       <TextField
                                           id="country"
                                           placeholder="Country" className={classes.shortTextFields}
                                           margin="normal" value={values.number}
                                           SelectProps={{
                                               native: true,
                                               MenuProps: {
                                                   className: classes.menu,
                                               },
                                           }}
                                       >
                                       </TextField>
                                   </FormGroup>
                               </div>
                               <div className={classes.affiliatedDiv}>
                                   <FormGroup>
                                       <FormLabel>
                                           Phone Number:
                                       </FormLabel>
                                       <TextField
                                           id="area-code"
                                           placeholder="Area Code" className={classes.shortTextFields}
                                           margin="normal" value={values.number}
                                       />
                                       <TextField
                                           id="contact"
                                           placeholder="Contact" className={classes.shortTextFields}
                                           margin="normal" value={values.number}
                                       />
                                   </FormGroup>
                               </div>
                           </FormGroup>
                        </FormGroup>
                        <Button variant="contained" size="large" className={classes.submitButton}>
                            Register
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>

    );
}





const registrationForm = withFormik({
    mapValuesToPayload: (props) => {
        return {
            DOB: props.RegistrationForm.DOB || "",
            firstName: props.FullName.FirstName || "",
            lastName: props.FullName.LastName || "",
            personalEmail: props.personalEmail || "",
            address: props.contact.address || "",
            number: props.contact.number || "",

        }
    }
})(form);

export default withStyles(styles)(registrationForm);