import React from 'react';
import { Typography } from '@material-ui/core';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

const basicUsage = `
  const [country, setCountry] = useState('');
const [region, setRegion] = useState('');

  <CountrySelector
    showCountryFlag
    value={country}
    onChange={setCountry}
    labelProps={{ className: 'testClassname', style: { textTransform: 'uppercase' } }}
    inputProps={{
        id: 'country',
        className: 'selectorInput',
        name: "countrySelect"
    }}
    showLabel
    label="Select Country"
    />
    <RegionSelector
     country={country}
     value={state}
     onChange={setstate}
     inputProps={{
        id: 'region',
         className: 'selectorInput',
         name: "regionSelect"
     }}
     showLabel
     label="Select State"
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
