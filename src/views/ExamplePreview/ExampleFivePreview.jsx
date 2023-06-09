import React from 'react';
import { Typography } from '@material-ui/core';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
//
const basicUsage = `
  const [country, setCountry] = useState('');
const [region, setRegion] = useState('');

<CountrySelector
showCountryFlag
value={country}
onChange={setCountry}
showLabel
label="Select Country"
labelProps={{ className: 'testClassname', 
style: { textTransform: 'uppercase', color: 'red' } 
}}
inputProps={{ className: 'selectorInput', 
style: { borderColor: 'red', 
background: "rgb(42, 39, 52)", color: '#fff' 
} 
}}
/>
<RegionSelector
country={country}
value={state}
onChange={setState}
showLabel
label="Select State"
labelProps={{ className: 'testClassname', 
style: { textTransform: 'uppercase', color: 'blue' }
 }}
inputProps={{ className: 'selectorInput', 
style: { borderColor: '#000', background: "#e9e7dc", color: '#000' } 
}}
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
