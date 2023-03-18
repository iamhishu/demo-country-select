import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        textAlign: 'center',
    },
    heading: {
        marginBottom: theme.spacing(2),
    },
}));


export default function ComingSoon() {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography variant="h3" className={classes.heading}>
                Coming Soon!
            </Typography>
            <Typography variant="subtitle1">
                We're working hard to bring you something awesome. Stay tuned!
            </Typography>
        </Container>
    );
}