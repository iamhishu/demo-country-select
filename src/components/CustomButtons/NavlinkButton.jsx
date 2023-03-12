import React from 'react';
import { makeStyles } from '@material-ui/core';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    navLinkButton: {
        display: 'inline-block',
        background: (props) => props.bgColor,
        color: "#212121d4 !important",
        width: (props) => props.width,
        border: '1px solid #b1b1b1 !important',
        borderRadius: (props) => props.borderRadius,
        padding: '10px 20px',
        textTransform: 'capitalize',
        margin: '10px',
        '&:hover': {
            color: "#212121 !important",
            border: '1px solid #616161 !important',
        },
    },
}));

function NavLinkButton(props) {
    const classes = useStyles(props);
    const { text, to } = props;
    return (
        <a className={classes.navLinkButton} href={to} >
            {text}
        </a>
    );
}

export default NavLinkButton;
