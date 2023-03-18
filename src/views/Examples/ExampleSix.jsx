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
///
export default function ExamppleOne() {
    const classes = useStyles();
    const [country, setCountry] = useState("");

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={12} md={12} style={{ textAlign: 'left' }}>
                <Typography variant="h6">
                    6. Prioritize India, United States and the UK by displaying them at the top of the dropdown list.
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
                            leadingCountries={["in", "us", "ca"]} // use leadingCountries Props if you want to prioritize your preferred countries.

                        />
                    </Grid>
                    <Grid item xs={6} lg={6} md={6}>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
