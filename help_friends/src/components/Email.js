import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        width: 300,
    },
    cover: {
        width: 700,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MediaControlCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h1" variant="h5">
                        CONTACTANOS
                    </Typography>
                    <Typography> Teléfono:09876543210</Typography>
                    <Typography> Dirección: Condado</Typography>
                    <Typography> Email: helpfriends_@gmail.com</Typography>
                    <Typography> facebook: help_friends </Typography>
                </CardContent>

            </div>
            <CardMedia
                className={classes.cover}
                component="img"
                alt="Contemplative Reptile"
                height="300"
                src='https://picsum.photos/700/300'
                title="Contemplative Reptile"
            />
        </Card>
    );
}

//import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import {makeStyles} from '@material-ui/core/styles';
// import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
// import {CardContent} from "@material-ui/core";
//
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         height: '50vh',
//     },
//     image: {
//         backgroundImage: 'url(https://source.unsplash.com/random)',
//         backgroundRepeat: 'no-repeat',
//         backgroundColor:
//             theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//     },
//     paper: {
//         margin: theme.spacing(8, 4),
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
//     cover: {
//         width: 151,
//     },
// }));
//
// export default function SignInSide() {
//     const classes = useStyles();
//
//     return (
//         <>
//             <CssBaseline/>
//             <Card>
//                 <CardMedia
//                     className={classes.cover}
//                     src='https://picsum.photos/300/350'
//                     title="Live from space album cover"
//                 />
//                 <CardContent>
//                     <Typography component="h1" variant="h5">
//                         CONTACTANOS
//                     </Typography>
//                     <Typography> Telefono:09876543210</Typography>
//                     <Typography> Direccion: Condado</Typography>
//                     <Typography> Email: helpfriends_@gmail.com</Typography>
//                     <Typography>facebook: help_friends </Typography>
//                 </CardContent>
//             </Card>
//         </>
//     );
// }