import React from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, makeStyles, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { HotelOutlined, Paid, PersonPinCircle } from '@mui/icons-material';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         maxWidth: 345,
//     },
//     media: {
//         height: 0,
//         paddingTop: '56.25%', // 16:9
//     },
//     expand: {
//         transform: 'rotate(0deg)',
//         marginLeft: 'auto',
//         transition: theme.transitions.create('transform', {
//             duration: theme.transitions.duration.shortest,
//         }),
//     },
//     expandOpen: {
//         transform: 'rotate(180deg)',
//     },
//     avatar: {
//         backgroundColor: red[500],
//     },
// }));

export default function Room({ room }) {
    // const classes = useStyles();
    const navigate = useNavigate();
    const handleBook = (bedType) => {
        navigate(`/book/${bedType}`);
    }
    return (

        <Card >
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" >
                        {room.avatar}
                    </Avatar>
                }
                title={room.title}
            />

            <CardMedia
                component="img"
                height="194"
                image={room.imgUrl}
                alt="Paella dish"
            />
            {/* <CardMedia
        className={classes.media}
        image={room.imgUrl}
        title="Paella dish"
      />
      <img src={`../images/${room.bedType}.png`} alt=""/> */}
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {room.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <HotelOutlined />: {room.bed}
                </IconButton>
                <IconButton aria-label="share">
                    <PersonPinCircle />: {room.capacity}
                </IconButton>
                <IconButton aria-label="price">
                    <Paid />: {room.price}
                </IconButton>
                <Button onClick={() => handleBook(room.bedType)} variant="contained" color="primary">
                    Book
                </Button>
            </CardActions>
        </Card>
    );
}
