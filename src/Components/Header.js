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

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography align='center' className={classes.title} variant="h6" noWrap>
                        <img src="images/Covid19.png" alt="Logo" width="50px" style={{
                            // width: 20,
                            verticalAlign: "middle",
                            paddingRight: "15px",
                        }} /><span style={{verticalAlign:'middle'}}>

                        Covid-19 Tracker App
                        </span>
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
}
