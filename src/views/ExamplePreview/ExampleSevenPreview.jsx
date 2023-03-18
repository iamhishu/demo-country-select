import React from 'react';
import { Typography } from '@material-ui/core';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
//
const basicUsage = `
  const [country, setCountry] = useState('');


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
// use 'whitelist' props to show only specific 
//regions from the selected countries
/>

`.trim();




export default function ExamppleOne() {
    return (
        <><Typography variant="h6">
            Usage
        </Typography><Highlight {...defaultProps} code={basicUsage} language="jsx" style={{ padding: '15px' }}>
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
            </Highlight></>

    );
}
