import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 345,
    margin: 15
  },
  media: {
    height: 320,
  }
});

export default function UserCard(props) {
  const classes = useStyles();
  const {avatar_url, login} = props.data;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={avatar_url}
          title={login}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {login} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A Software Engineer at Lambda School learning JS Web Development.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
