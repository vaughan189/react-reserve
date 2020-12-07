import React, { useState } from 'react';
import { CssBaseline, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, Box, Link, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Copyright } from "../../components/Copyright";
import { useStyles } from "./styles";
import { userActions } from '../../redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const LoginPage = (props: any) => {
    const { dispatch, history } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function onsubmit(e: any) {
        e.preventDefault();
        dispatch(userActions.login(email, password, history));
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar>
                <Typography component="h1" variant="h5">Log in</Typography>
                <form className={classes.form} noValidate>
                    <TextField variant="outlined" margin="normal" required fullWidth label="Email Address" autoComplete="email"
                        onChange={e => setEmail(e.target.value)} autoFocus />
                    <TextField variant="outlined" margin="normal" required fullWidth label="Password" type="password"
                        onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}
                        disabled={!validateForm()} onClick={e => { onsubmit(e) }}>Sign In</Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    )
}

export default connect()(withRouter(LoginPage));