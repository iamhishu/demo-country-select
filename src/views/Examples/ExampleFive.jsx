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
    const [state, setState] = useState("")
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={12} md={12} style={{ textAlign: 'left' }}>
                <Typography variant="h6">
                    5. The Country and Region dropdowns support the use of arbitrary attributes, including style and tabindex
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
                            labelProps={{ className: 'testClassname', style: { textTransform: 'uppercase', color: 'red' } }}
                            inputProps={{ className: 'selectorInput', style: { borderColor: 'red', background: "rgb(42, 39, 52)", color: '#fff' } }}
                        />
                    </Grid>
                    <Grid item xs={6} lg={6} md={6}>
                        <RegionSelector
                            country={country}
                            value={state}
                            onChange={setState}
                            showLabel
                            label="Select State"
                            labelProps={{ className: 'testClassname', style: { textTransform: 'uppercase', color: 'blue' } }}
                            inputProps={{ className: 'selectorInput', style: { borderColor: '#000', background: "#e9e7dc", color: '#000' } }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
