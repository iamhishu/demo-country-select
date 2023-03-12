import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import melogo from "../../assets/logo/its_hishu.jpeg"
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function ImageAvatars() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar alt="its_hishu" src={melogo} />
        </div>
    );
}