import React, { useState, useEffect } from 'react';
import { makeStyles, Paper, Grid } from '@material-ui/core';
import ModalView from './ModalView';
import axios from 'axios';
// import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
    },
    paper: {
        marginTop: 10,
        padding: theme.spacing(1),
        paddingRight: 0,
        paddingLeft: 0,
        textAlign: 'center',
        // color: theme.palette.text.primary,
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

// const api = 'https://api.covid19api.com/summary';

function CountryStats() {
    const classes = useStyles();
    const [countriesData, setCountriesData] = useState({})
    
    useEffect(() => {
        async function getData() {
            // const response = await axios.get('https://api.covid19api.com/summary')
            // const data = await response.json();
            // const data = await response.json();
            const response = await axios.get("https://api.covid19api.com/summary")
            setCountriesData(response.data.Countries)
        }
        getData()
    }, [])
    console.log(countriesData)
    // console.log(countriesData);
    return (
        <div className={classes.root}>
            <h1 className={classes.heading}>Country Stats</h1>
            <Grid container spacing={3}>
                {Object.keys(countriesData).map((key, ind) => {
                    return (
                        <Grid item xs={12} sm={6} lg={4} key={ind}>
                            <Paper
                                className={classes.paper}
                                elevation={3}>
                                <div className={classes.blue}>

                                    <h3 className={classes.title}>
                                        {countriesData[ind].Country}
                                    </h3>
                                    <img src={`https://www.countryflags.io/${countriesData[ind].CountryCode}/flat/64.png`} alt={countriesData.Country} />

                                    <p style={{fontWeight: 600}}>
                                        {/* {const totalInfected = <CountUp end={countriesData[ind].TotalConfirmed} />} */}
                                        {`Total Cases: ${countriesData[ind].TotalConfirmed}`}
                                    </p>
                                    <p>
                                        {new Date(countriesData[ind].Date).toDateString()}
                                    </p>
                                    <span>
                                        <ModalView country={countriesData[key]} />
                                        </span>                                   
                                        {/* {console.log(countriesData[ind][0])}
                                        {console.log(countriesData[key][0])} */}
                                </div>
                            </Paper>
                        </Grid>

                    )
                })}
            </Grid>
        </div>
    );
}

export default CountryStats;
