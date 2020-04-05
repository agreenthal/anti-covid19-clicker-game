import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import API from '../../utils/API';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(25),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(7),
    },
    submit: {
        margin: theme.spacing(3, 0, -2),
    },
}));

function LogIn() {
    const classes = useStyles();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleLogin= event => {
        event.preventDefault();
        API.login({
            token,
            player: {
                // id,
                username: usernameRef,
                easyscore: passwordRef,
                // mediumscore,
                // hardscore,
            }
        })
        .catch(err => console.log(err))
    }

    const handleRegister= event => {
        event.preventDefault();
        API.register({
            token,
            player: {
                username: usernameRef,
                easyscore: passwordRef,
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required ref={usernameRef}
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                style={{ backgroundColor: 'white' }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required ref={passwordRef}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                style={{ backgroundColor: 'white' }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button
                                onClick={handleLogin}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >Log In</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                onClick={handleRegister}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >Register</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default LogIn;