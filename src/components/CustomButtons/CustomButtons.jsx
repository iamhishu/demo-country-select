import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        background: (props) => props.bgColor,
        color: (props) => props.textColor,
        width: (props) => props.width,
        ...props.style,
        '&:hover': {
            background: (props) => props.hoverBgColor,
        },
    },
}));

function CustomButton(props) {
    const classes = useStyles(props);
    const { text, onClick } = props;
    return (
        <Button className={classes.button} onClick={onClick}>
            {text}
        </Button>
    );
}

export default CustomButton;
