import React, { useState, useEffect } from 'react';
import { makeStyles, Paper, Grid } from '@material-ui/core';
import Chart from '../Charts/Chart';
import axios from 'axios';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto'
    },
    paper: {
        marginTop: 10,
        padding: theme.spacing(1),
        paddingRight: 0,
        paddingLeft: 0,
        textAlign: 'center',
        backgroundColor: 'rgb(220, 231, 117)',
    },
    blue: {
        color: 'rgb(13, 71, 161)' // blue
    },

    red: {
        color: 'rgb(144, 12, 63)' //red
    },

    green: {
        color: 'rgb(0, 77, 64)' //green
    },

    title: {
        textTransform: 'uppercase',
        margin: 0,
        padding: 0,
    },

    heading: {
        margin: '4 auto',
        textAlign: 'center',
        color: 'rgb(183, 28, 28)',
        textTransform: 'uppercase'
    }
}));

function GlobalStats() {
    const classes = useStyles();
    const [globalData, setGlobalData] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await axios.get("https://api.covid19api.com/summary")
            setGlobalData(response.data.Global)
        }
        getData()
    }, [])
    console.log(globalData)

    return (
        <div className={classes.root}>
            <h1 className={classes.heading}>Global Stats</h1>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={4}>
                    <Paper
                        className={classes.paper}
                        elevation={3}>
                        <div className={classes.blue}>

                            <h3 className={classes.title}>
                                New Infected
                        </h3>
                            <h1>
                                <CountUp
                                    start={globalData.NewConfirmed/2}
                                    end={globalData.NewConfirmed}
                                    duration={2}
                                    separator="," />
                            </h1>
                            <p>
                                {new Date(globalData.Date).toDateString()}
                            </p>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <Paper
                        className={classes.paper}
                        elevation={3}>
                        <div className={classes.blue}>

                            <h3 className={classes.title}>
                                Total Infected
                        </h3>
                            <h1>
                                <CountUp
                                    start={globalData.TotalConfirmed/2}
                                    end={globalData.TotalConfirmed}
                                    duration={2}
                                    separator="," />
                            </h1>
                            <p>
                                {new Date(globalData.Date).toDateString()}
                            </p>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <Paper
                        className={classes.paper}
                        elevation={3}>
                        <div className={classes.red}>

                            <h3 className={classes.title}>
                                New Deaths
                        </h3>
                            <h1>
                                <CountUp
                                    start={globalData.NewDeaths/2}
                                    end={globalData.NewDeaths}
                                    duration={2}
                                    separator="," />
                            </h1>
                            <p>
                                {new Date(globalData.Date).toDateString()}
                            </p>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <Paper
                        className={classes.paper}
                        elevation={3}>
                        <div className={classes.red}>

                            <h3 className={classes.title}>
                                Total Deaths
                        </h3>
                            <h1>
                                <CountUp
                                    start={globalData.TotalDeaths/2}
                                    end={globalData.TotalDeaths}
                                    duration={2}
                                    separator="," />
                            </h1>
                            <p>
                                {new Date(globalData.Date).toDateString()}
                            </p>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <Paper
                        className={classes.paper}
                        elevation={3}>
                        <div className={classes.green}>

                            <h3 className={classes.title}>
                                New Recovered
                        </h3>
                            <h1>
                                <CountUp
                                    start={globalData.NewRecovered/2}
                                    end={globalData.NewRecovered}
                                    duration={2}
                                    separator="," />
                            </h1>
                            <p>
                                {new Date(globalData.Date).toDateString()}
                            </p>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <Paper
                        className={classes.paper}
                        elevation={3}>
                        <div className={classes.green}>

                            <h3 className={classes.title}>
                                Total Recovered
                        </h3>
                            <h1>
                                <CountUp
                                    start={globalData.TotalRecovered/2}
                                    end={globalData.TotalRecovered}
                                    duration={2}
                                    separator="," />
                            </h1>
                            <p>
                                {new Date(globalData.Date).toDateString()}
                            </p>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <Chart />
        </div>
    );
}

export default GlobalStats;
