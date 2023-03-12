import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import { RegionSelector, CountrySelector } from 'react-country-region-select';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function ExamppleOne() {
    const classes = useStyles();
    const [country, setCountry] = useState("india");
    const [state, setstate] = useState("hp");

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={12} md={12} style={{ textAlign: 'left' }}>
                <Typography variant="h6">
                    2. Show/Hide Labels
                </Typography>
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
                <Grid container spacing={2}>
                    <Grid item xs={6} lg={6} md={6}>
                        <CountrySelector
                            showCountryFlag
                            value={country}
                            onChange={setCountry}
                            showLabel
                            label="Select Country"
                        />
                    </Grid>
                    <Grid item xs={6} lg={6} md={6}>
                        <RegionSelector
                            country={country}
                            value={state}
                            onChange={setstate}
                            showLabel
                            label="Select State"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
