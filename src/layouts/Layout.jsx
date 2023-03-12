import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import NavLinkButton from '../components/CustomButtons/NavlinkButton';
import npmLogo from "../assets/logo/npm-logo.png";
import MyAvtar from "../components/Avatar/Avatar.jsx";
function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

function Layout({ children }, props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar variant="outlined" >
                    <Toolbar>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%"
                        }}>

                            <div >
                                <a href='https://github.com/iamhishu/material-region-selector' target={'_blank'}>

                                    <div style={{ width: '85px', }}>
                                        <img src={npmLogo} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                                    </div>
                                </a>  </div>

                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <NavLinkButton
                                    to="/"
                                    text="home"

                                />
                                <NavLinkButton
                                    to="/example"
                                    text="examples"


                                />
                                <NavLinkButton
                                    to="/collabs"
                                    text="collaboration"


                                />

                                <MyAvtar />

                            </div>

                        </div>

                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Container style={{ padding: '25px' }}>
                {children}
            </Container>
        </React.Fragment>
    );
}

export default Layout