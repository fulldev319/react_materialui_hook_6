import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function PplCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.user.avatar} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.user.first_name + " " + props.user.last_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.user.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={props.user.avatar} size="small" color="primary">
          THUMBNAIL PIC
        </Button>
      </CardActions>
    </Card>
  );
}
