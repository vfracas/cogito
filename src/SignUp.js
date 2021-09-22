import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      margin: theme.spacing(8),
      padding: theme.spacing(6),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#353535',
      color: '#EDEDED',
      width: "40%"
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      color: '#EDEDED'
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event =>{
        event.preventDefault();
        const { email, password } = event.target.elements;
        try{
            await app.auth()
                     .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch(error){
            alert(error);
        }
    }, [history]);
    const classes = useStyles();

    return(
        <Box height="100vh" display="flex" flexDirection="row">
            <Box display="flex" flexDirection="column" color="#EDEDED" alignItems="center" justifyContent="center" bgcolor="#353535" height="100%" width="50%">
                <h1>Cogito</h1>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" bgcolor="#5800BB" height="100%" width="50%">
                <div className={classes.paper}>
                    <h1>Sign up</h1>
                    <form  className={classes.form} onSubmit={handleSignUp}> 
                        <TextField variant="outlined" color="secondary" fullWidth margin="normal" type="email" id="email" label="Email" required name="email" autoComplete="email" autoFocus/>
                        <TextField variant="outlined" color="secondary" fullWidth margin="normal" type="password" id="password" label="Password" required name="password" autoComplete="password" autoFocus/>
                        <Button type="submit" size="large" fullWidth color="primary" variant="contained" className={classes.submit}>Sign up</Button>
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                        <Grid container>
                        <Grid item>
                            <Link href="/login" variant="body2">
                            {"Already have an account? Sign up"}
                            </Link>
                        </Grid>
                        </Grid>
                    </form>
                </div>
            </Box>
        </Box>
    );
};

export default withRouter(SignUp);