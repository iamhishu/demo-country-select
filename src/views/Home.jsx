import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { useState } from "react";
import {
    CountrySelector,
    RegionSelector,
} from "react-country-region-select";
import "../App.css";
import { Pre } from "../styles.js";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import { Typography } from "@material-ui/core";
import "../App.css";

const exampleCode = `
npm i react-country-region-select
yarn add react-country-region-select
`.trim();


const basicUsage = `
import React, { Component } from 'react';
import { RegionSelector, CountrySelector } from 'react-country-region-select';

const App = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');


  return (
  <><CountrySelector
      showCountryFlag
      label="Select Country"
      value={country}
      onChange={setCountry} />
      <RegionSelector
        label="Select Region"
        country={country}
        value={region}
        onChange={setRegion} /></>
    )
}

export default App
`.trim();



function App() {
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");

    return (
        <Container>
            <Box my={2}>
                <Typography variant="h2" style={{ fontWeight: 700, textAlign: "left" }}>
                    {" "}
                    Tutorial{" "}
                </Typography>
                <Typography variant="p" style={{ marginTop: "20px", fontSize: "18px" }}>
                    {" "}
                    In this tutorial you'll learn how to use React country region flag selector, Follow the tutorial below to learn how to use
                    React country region flag selector.{" "}
                </Typography>


                <Typography variant="h5" style={{ marginTop: "40px", fontWeight: 700, textAlign: "left" }}>
                    Installation
                </Typography>



                <Highlight {...defaultProps} code={exampleCode} language="jsx" style={{ padding: '15px' }}>
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={className} style={style}>
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({ token, key })} />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>


                <Typography variant="h5" style={{ marginTop: "40px", fontWeight: 700, textAlign: "left" }}>
                    Basic Usage
                </Typography>

                <Typography variant="p" style={{ marginTop: "20px", fontSize: "18px" }}>
                    This library offers a set of React elements that allow for displaying interlinked dropdown menus for countries(with flag/without flag) and regions (select a country, and it displays the corresponding regions)
                </Typography>


                <Highlight {...defaultProps} code={basicUsage} language="jsx" style={{ padding: '15px' }}>
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={className} style={style}>
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({ token, key })} />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>


            </Box>
        </Container>
    );
}

export default App;
