import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import Box from '@material-ui/core/Box';
import TextField from "@material-ui/core/TextField";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      margin: theme.spacing(8),
      padding: theme.spacing(6),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EDEDED',
      width: "40%"
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

const Login = ({ history }) => {
    const handleLogin = useCallback(async event =>{
        event.preventDefault();
        const { email, password } = event.target.elements;
        try{
            await app.auth()
                     .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch(error){
            alert("L'email ou le mot de passe est incorrect.");
        }
    }, [history]);
    const classes = useStyles();

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return(
        <Box height="100vh" display="flex" flexDirection="row">
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" bgcolor="#FF9800" height="100%" width="50%">
                <Box className={classes.paper}>
                    <h1>Log in</h1>
                    <form  className={classes.form} onSubmit={handleLogin}> 
                        <TextField variant="outlined" fullWidth margin="normal" type="email" id="email" label="Email" required name="email" autoComplete="email"/>
                        <TextField variant="outlined" fullWidth margin="normal" type="password" id="password" label="Password" required name="password" autoComplete="password"/>
                        <Button type="submit" size="large" fullWidth color="primary" variant="contained" className={classes.submit}>Log in</Button>
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                        <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                            Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                            {"You don't have an account? Sign up"}
                            </Link>
                        </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%" width="50%">
                <h1>Cogito</h1>
            </Box>
        </Box>
    );
};

export default withRouter(Login);