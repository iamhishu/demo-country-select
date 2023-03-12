import React from 'react';
import { Grid } from '@material-ui/core';
import ExamppleOne from './Examples/ExamplesOne';
import ExamppleTwo from './Examples/ExampleTwo';
import ExampleThree from "./Examples/ExamplesThree";
import ExampleOnePreview from "./ExamplePreview/ExampleOnePreview"
import ExampleTwoPreview from "./ExamplePreview/ExampleTwoPreview"
import ExampleThreePreview from "./ExamplePreview/ExampleThreePreview";
import ExampleFourPreview from "./ExamplePreview/ExampleFourPreview";
import ExampleFivePreview from "./ExamplePreview/ExampleFivePreview";
import ExampleFour from "./Examples/ExampleFour";
import ExampleFive from "./Examples/ExampleFive";
function TwoColumnLayout() {
    return (
        <Grid container spacing={2}>
            <p><b>On this page, </b>you'll find a handful of <b>examples</b>. Each example includes <b>JSX</b> code to demonstrate its functionality. However, please keep in mind that you'll need to provide the necessary <b>onChange</b> methods and store the values for the <b>country and region</b>. For complete instructions on how to add this component to your pages, please refer to the <b>readme documentation</b></p>
            <Grid item xs={12} md={6} lg={6}>
                <ExamppleOne />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <ExampleOnePreview />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <ExamppleTwo />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <ExampleTwoPreview />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <ExampleThree />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <ExampleThreePreview />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
                <ExampleFour />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <ExampleFourPreview />
            </Grid>
            {/* <Grid item xs={12} md={6} lg={6}>
                <ExampleFive />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <ExampleFivePreview />
            </Grid> */}
        </Grid>
    );
}

export default TwoColumnLayout;