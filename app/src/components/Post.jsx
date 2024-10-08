import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';




const Post = (props) => {

  return (
    <Card sx={{ maxWidth: 330, margin: '1rem auto' }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"/>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={props.username}
      subheader={props.date}
    />
    {props.image === null ? '' : ( 
      <CardMedia
      component="img"
      height="200"
      image={props.image}
      alt="Brewer logo"
    />)}
    <CardContent>
      <Typography variant="body2" color="text.secondary">
       {props.message}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        {/* TODO: Add like functionality */}
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        {/* TODO: Research and add share functionality */}
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default Post