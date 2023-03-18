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
            <a href='https://www.instagram.com/its_hishu/?hl=en' target={"_blank"} alt="its_hishu">
                <Avatar alt="its_hishu" src={melogo} />
            </a>

        </div>
    );
}