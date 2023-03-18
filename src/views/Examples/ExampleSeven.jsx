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
                    7. Approve only particular regions
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
                            inputProps={{
                                className: 'selectorInput',
                                style: {
                                    borderColor: 'red',
                                    background: "rgb(42, 39, 52)", color: '#fff',
                                }
                            }}
                            allowcountry={["us", "af", "germany", "in", "cn"]}
                        // use 'allowcountry' props to show only specific country
                        />
                    </Grid>
                    <Grid item xs={6} lg={6} md={6}>
                        <RegionSelector
                            country={country}
                            value={state}
                            onChange={setState}
                            showLabel
                            label="Select State"
                            inputProps={{
                                className: 'selectorInput',
                                style: {
                                    borderColor: 'red',
                                    background: "rgb(42, 39, 52)", color: '#fff',
                                }
                            }}
                            whitelist={{
                                CA: ["BC", "AB", "MB"],
                                US: ["washington", "Oregon", "Illinois"],
                                in: ['hp', "punjab"],
                            }}
                        // use 'whitelist' props to show only specific regions from the selected countries
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
