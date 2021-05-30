import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'inline-block',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        fontWeight: 600,
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography align='center' className={classes.title} variant="h8" noWrap>
                        Covid-19 Tracker App &copy; copyright 2021 Shehzad Khan
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
}
